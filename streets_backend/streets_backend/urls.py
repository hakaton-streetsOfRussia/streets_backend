from django.contrib import admin
from django.urls import include, path, re_path
from django.conf import settings

from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions, routers

from aboutus.views import (AboutUsViewSet, FederalTeamViewSet,
                           GalleryViewSet, MediaViewSet, PartnerTypeViewSet,
                           PartnerViewSet, RegionalTeamViewSet, RegionViewSet)
from blog.views import BlogPostViewSet
from contacts.views import ContactViewSet
from streetculture.views import StreetCultureViewSet
from qr_code_app.views import generate_qr_code

schema_view = get_schema_view(
    openapi.Info(
        title="Your Project API",
        default_version='v1',
        description="API documentation for your project",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@yourproject.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

router = routers.DefaultRouter()
router.register(settings.BASE_URL + '/v1/blog', BlogPostViewSet, basename='blog')
router.register(settings.BASE_URL + '/v1/contacts', ContactViewSet, basename='contacts')
router.register(settings.BASE_URL + '/v1/aboutus', AboutUsViewSet, basename='aboutus')
router.register(settings.BASE_URL + '/v1/federalteam', FederalTeamViewSet, basename='federalteam')
router.register(settings.BASE_URL + '/v1/regionalteam', RegionalTeamViewSet, basename='regionalteam')
router.register(settings.BASE_URL + '/v1/partnertype', PartnerTypeViewSet, basename='partnertype')
router.register(settings.BASE_URL + '/v1/partner', PartnerViewSet, basename='partner')
router.register(settings.BASE_URL + '/v1/gallery', GalleryViewSet, basename='gallery')
router.register(settings.BASE_URL + '/v1/media', MediaViewSet, basename='media')
router.register(settings.BASE_URL + '/v1/streetculture', StreetCultureViewSet, basename='streetculture')
router.register(settings.BASE_URL + '/v1/region', RegionViewSet, basename='region')

urlpatterns = [
     path('admin/', admin.site.urls),
     path('', include(router.urls)),
     re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
     path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
     path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
     path('qr_code/<str:qr_code_name>/', generate_qr_code, name='qr_code'),
]