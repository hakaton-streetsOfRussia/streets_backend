from rest_framework import serializers

from users.models import CustomUser


class ManagementDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = (
            'last_name',
            'first_name',
            'third_name',
            'bio',
            'avatar'
        )


class ManagementListSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = (
            'last_name',
            'first_name',
            'third_name',
            'summary_bio',
            'avatar'
        )


class SignUpSerializer(serializers.ModelSerializer):
    confirmation_code = serializers.IntegerField(write_only=True)

    class Meta:
        model = CustomUser
        fields = (
            'username',
            'email',
            'confirmation_code'
        )

    def validate_username(self, value):
        user = None
        try:
            user = CustomUser.objects.get(username=value)
        except CustomUser.DoesNotExist:
            pass
        if user is not None:
            raise serializers.ValidationError(
                'У нас уже есть пользователь с таким username.'
            )
        match = re.fullmatch(r'^[mM][eE]$', value)
        if match:
            raise serializers.ValidationError('Недопустимое имя пользователя.')
        return value

    def validate_email(self, value):
        user = None
        try:
            user = CustomUser.objects.get(email=value)
        except CustomUser.DoesNotExist:
            pass
        if user is not None:
            raise serializers.ValidationError(
                ('У нас уже есть пользователь с таким email.')
            )
        return value
    

class PasswordSettingSerializer(serializers.Serializer):
    password1 = serializers.CharField(min_length=8, max_length=10, write_only=True)
    password2 = serializers.CharField(min_length=8, max_length=10, write_only=True)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError('Пароли должны совпадать!')
        return data
