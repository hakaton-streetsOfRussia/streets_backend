from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from contacts.views import ContactViewSet
from blog.views import BlogPostViewSet
from events.views import EventViewSet
from aboutus.views import (AboutUsViewSet, FederalTeamViewSet,
                            RegionalTeamViewSet, PartnerTypeViewSet,
                            PartnerViewSet, GalleryViewSet, MediaViewSet)
from events.views import EventViewSet, DisciplineViewSet, RegionViewSet

router = routers.DefaultRouter()
router.register(r'v1/blog', BlogPostViewSet, basename='blog')
router.register(r'v1/contacts', ContactViewSet, basename='contacts')
router.register(r'v1/aboutus', AboutUsViewSet, basename='aboutus')
router.register(r'v1/federalteam', FederalTeamViewSet, basename='federalteam')
router.register(r'v1/regionalteam', RegionalTeamViewSet, basename='regionalteam')
router.register(r'v1/partnertype', PartnerTypeViewSet, basename='partnertype')
router.register(r'v1/partner', PartnerViewSet, basename='partner')
router.register(r'v1/gallery', GalleryViewSet, basename='gallery')
router.register(r'v1/media', MediaViewSet, basename='media')
router.register(r'v1/events', EventViewSet, basename='events')
router.register(r'v1/disciplines', DisciplineViewSet, basename='disciplines')
router.register(r'v1/regions', RegionViewSet, basename='regions')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]