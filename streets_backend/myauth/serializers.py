import logging
import sys

from django.contrib.auth.models import AnonymousUser
from rest_framework import serializers
from rest_framework.authtoken.serializers import AuthTokenSerializer

from users.models import CustomUser

formatter = logging.Formatter(
    '%(asctime)s %(levelname)s %(message)s - строка %(lineno)s'
)

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
handler = logging.StreamHandler(sys.stdout)
logger.addHandler(handler)
handler.setFormatter(formatter)
logger.disabled = False
logger.debug('Логирование из auth.serializers запущено')


class MyAuthSerializer(AuthTokenSerializer):
    username = serializers.CharField(write_only=True)
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )
    token = serializers.CharField(
        read_only=True
    )

    class Meta:
        fields = ('username', 'password')

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        # logger.debug('username: %s, password: %s', username, password)

        if not password or not username:
            raise serializers.ValidationError(
                'Не получены имя пользователя и пароль'
            )
        else:
            try:
                user = CustomUser.objects.get(username=username)
                logger.debug(f'Получен user: {user.__dict__}')
            except CustomUser.DoesNotExist:
                raise serializers.ValidationError(
                    'Пользователь не зарегистрирован'
                )
            logger.debug('Пользователь распознан как зарегистрированный')

            if not user.check_password(password):
                raise serializers.ValidationError('Пароль неверный')
            logger.debug('Пароль сходится')

        logger.debug('Пользователь аутентифицирован')
        data['user'] = user
        logger.debug(f'Итоговые data: {data}')
        return data
