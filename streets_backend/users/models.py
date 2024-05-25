import logging
import sys

import jwt
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.validators import RegexValidator
from django.db import models
from rest_framework_simplejwt.tokens import AccessToken

from aboutus.models import Region

from streets_backend.settings import SECRET_KEY
from .validators import validate_birthday

formatter = logging.Formatter(
    '%(asctime)s %(levelname)s %(filename)s: '
    '%(message)s - line %(lineno)s'
)

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
handler = logging.StreamHandler(sys.stdout)
logger.addHandler(handler)
handler.setFormatter(formatter)
logger.disabled = False
logger.debug('Logging from users.models has been started.')

ROLE_CHOICES = (
    ('admin', 'Администратор'),
    ('fed manager', 'Федеральный руководитель'),
    ('reg manager', 'Региональный руководитель'),
    ('participant', 'Участник')
)


class CustomUserManager(BaseUserManager):
    def create_superuser(self, username, email, password, **other_fields):
        role = 'admin'

        return self.create_user(
            username,
            email,
            role,
            password,
            **other_fields
        )

    def create_user(
        self,
        username,
        email,
        role='participant',
        password=None,
        **other_fields
    ):
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            username=username,
            role=role,
            **other_fields
        )
        user.is_staff = True
        user.set_password(password)
        user.save()
        if user.is_superuser is True:
            first_line = f'Создан суперпользователь {username}.'
        else:
            first_line = f'Создан пользователь {username}.'
        logger.debug(
            f'{first_line}\nЕго роль: {role}.'
            f'Его confirmation_code для обновления токена:\n'
        )
        return user


class CustomUser(AbstractUser):
    """Кастомная модель пользователя."""
    objects = CustomUserManager()
    bio = models.TextField('Дополнительная информация', blank=True, null=True)
    role = models.CharField(
        'Роль',
        choices=ROLE_CHOICES,
        default='participant',
        max_length=16
    )
    email = models.EmailField(
        'E-mail',
        unique=True
    )
    username = models.CharField(
        'Имя пользователя',
        max_length=150,
        unique=True,
        validators=(
            RegexValidator(
                regex=r'^[mM][eE]$',
                message=(
                    'Попытка регистрации пользователя '
                    'под me-образным именем'
                ),
                inverse_match=True
            ),
        ),
    )
    last_name = models.CharField(
        'Фамилия',
        max_length=150,
        null=True,
        blank=True
    )
    first_name = models.CharField(
        'Имя',
        max_length=150,
        null=True,
        blank=True
    )
    third_name = models.CharField(
        'Отчество',
        max_length=150,
        null=True,
        blank=True
    )
    birth_date = models.DateField(
        'День рождения',
        validators=(validate_birthday,),
        null=True,
        blank=True
    )
    tg_nick = models.CharField(
        'Имя пользователя в телеграм',
        max_length=32,
        unique=True,
        null=True,
        blank=True,
        validators=(
            RegexValidator(
                regex=r'^@[\w\d_]{5,32}$',
                message=(
                    'Некорректный ник телеграм'
                )
            ),
        ),
    )
    phone = models.CharField(
        'Мобильный телефон',
        max_length=11,
        unique=True,
        null=True,
        blank=True,
        validators=(
            RegexValidator(
                regex=r'^89\d{9}$',
                message=(
                    'Введите реальный мобильный телефон '
                    'в формате 89XXXXXXXXX'
                )
            ),
        )
    )
    avatar = models.ImageField(
        'Аватар',
        null=True,
        blank=True
    )
    regions = models.ManyToManyField(Region, through='UserRegion')

    class Meta:
        ordering = ('-date_joined',)
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'

    def __str__(self):
        return f'{self.username}: {self.email}, уровень доступа: {self.role}'


class UserRegion(models.Model):
    """Модель связи региона с пользователем."""
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return '{} из {}'.format(self.user, self.region)
