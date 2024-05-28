from rest_framework import permissions, viewsets

from users.models import CustomUser
from users.serializers import (
    ManagementDetailSerializer,
    ManagementListSerializer
)


class ManagementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CustomUser.objects.filter(role='fed manager')
    permission_classes = (permissions.AllowAny,)
    pagination_class = None

    def get_serializer_class(self):
        if self.action == 'list':
            return ManagementListSerializer
        return ManagementDetailSerializer


class SignUpView(views.APIView):
    """Регистрация пользователя по почте."""
    def post(self, request):
        confirmation_code = get_confirmation_code()
        rd = request.data
        rd['confirmation_code'] = confirmation_code
        serializer = SignUpSerializer(data=rd)
        if serializer.is_valid():
            serializer.save(is_active=False)
            username = rd.get('username')
            email = rd.get('email')
            mail_theme = f'Подтверждение регистрации пользователя {username}'
            mail_text = (
                f'Здравствуйте!\n\n\tВы (или кто-то другой) '
                'запросили регистрацию на сайте \'Улицы России\'. '
                'Для подтверждения регистрации пройдите по ссылке:'
                f'http://{BASE_URL}/v1/confirmation/'
                f'{username}/{confirmation_code}'
            )
            mail_from = EMAIL_HOST_USER + '@yandex.ru'
            mail_to = [email]
            send_mail(
                mail_theme,
                mail_text,
                mail_from,
                mail_to,
                fail_silently=False
            )
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ConfView(views.APIView):
    """Подтверждение регистрации пользователя по почте."""
    def get(self, request):
        print(self.kwargs)
        exit()

