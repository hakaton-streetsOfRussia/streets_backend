import logging
import sys

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group

from streets_backend.settings import EMPTY_VALUE

from .models import CustomUser

formatter = logging.Formatter(
    '%(asctime)s %(levelname)s %(message)s - строка %(lineno)s'
)

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
handler = logging.StreamHandler(sys.stdout)
logger.addHandler(handler)
handler.setFormatter(formatter)
logger.disabled = False
logger.debug('Логирование из users.admin запущено')

# отключение отображения в админ-панели раздела 'пользователи и группы'
admin.site.unregister(Group)


@admin.register(CustomUser)
class UserAdminConfig(UserAdmin):
    list_display = (
        'username',
        'email',
        'first_name',
        'last_name',
    )
    search_fields = ('username', 'email')

    list_filter = ('email', 'username', 'is_superuser', 'is_staff')

    fieldsets = (
        ('Key fields', {
            'fields': ('avatar', 'username', 'email', 'password')
        }),
        ('Personal info', {
            'fields': (
                'first_name', 'last_name', 'third_name', 'bio', 'birth_date'
            ), 'classes': ('collapse',)
        }),
        ('Contact info', {
            'fields': (
                'tg_nick', 'phone'
            ), 'classes': ('collapse',)
        }),
        ('Permissions', {
            'fields': ('role', 'is_staff', 'is_active', 'is_superuser'),
        }),
    )

    # readonly_fields = (
    #     'username',
    #     'email',
    #     'first_name',
    #     'last_name',
    #     'is_staff'
    # )

    add_fieldsets = (
        (None, {
            'classes': ('extrapretty',),
            'fields': (
                'username',
                'email',
                'password1',
                'password2'
            )
        }),
    )
    empty_value_display = EMPTY_VALUE

    def save_model(self, request, obj, form, change):
        """Кастомизированный метод сохранения пользователя из админ панели."""
        logger.debug(change)
        if isinstance(obj, CustomUser):
            logger.debug('The object was recognized as CustomUser instance')
            super().save_model(request, obj, form, change)
            user_role = obj.role
            username = obj.username
            if user_role in ('admin', 'promoter'):
                obj.is_staff = True
            # на случай изменения объекта
            else:
                obj.is_staff = False
            obj.save()
            confirmation_code = obj.confirmation_code
            token = obj.token
            if change:
                if obj.is_superuser:
                    pre_first_line = (f'\tВНИМАНИЕ! Объект был изменен на '
                                      f'"суперпользователь {username}".')
                else:
                    pre_first_line = (f'\tВНИМАНИЕ! Объект был изменен на '
                                      f'"пользователь {username}".')
                first_line = (f'{pre_first_line}\n\tДля него были '
                              'созданы новые коды доступа.')
            else:
                if obj.is_superuser:
                    first_line = f'Создан суперпользователь {username}.'
                else:
                    first_line = f'Создан пользователь {username}.'
            # при запуске в производство поставить отправку по почте
            logger.debug(
                f'{first_line}\nЕго роль: {user_role}.\n'
                f'Его токен: {token}\n'
                f'Его confirmation_code для обновления токена:\n'
                f'{confirmation_code}'
            )
            logger.debug(f'user is active: {obj.is_active}')
            logger.debug(f'user is staff: {obj.is_staff}')
        else:
            super().save_model(request, obj, form, change)

    def get_fieldsets(self, request, obj=None):
        """Кастомизированное отображение полей."""
    
    def has_module_permission(self, request):
        return True

    def has_delete_permission(self, request, obj=None):
        """Разрешение на удаление."""
        # TODO сделать проверку на авторство для удаления
        if obj:
            request_user = request.user
            if isinstance(obj, CustomUser):
            # return request.user.is_staff and not obj.is_staff
                return (
                    request_user.is_superuser or
                    (request_user.role == 'admin' and obj.role == 'promoter')
                )
            return request_user.role in ('admin', 'promoter')
    
    def has_view_permission(self, request, obj=None):
        return request.user.is_staff
