import os

from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from aboutus.serializers import (AboutUsSerializer,
                                 FederalTeamSerializer, 
                                 RegionalTeamSerializer, 
                                 PartnerTypeSerializer,
                                 PartnerSerializer,
                                 GallerySerializer,
                                 MediaSerializer,
                                 RegionSerializer)
from aboutus.models import (AboutUs, FederalTeam,
                            RegionalTeam, PartnerType, 
                            Partner, Gallery, Media, Region)
from streets_backend.settings import DEBUG


class AboutUsViewSet(viewsets.ModelViewSet):
    """ViewSet для модели AboutUs"""
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer


class FederalTeamViewSet(viewsets.ModelViewSet):
    """ViewSet для модели FederalTeam"""
    queryset = FederalTeam.objects.all()
    serializer_class = FederalTeamSerializer


class RegionalTeamViewSet(viewsets.ModelViewSet):
    """ViewSet для модели RegionalTeam"""
    queryset = RegionalTeam.objects.all()
    serializer_class = RegionalTeamSerializer


class PartnerTypeViewSet(viewsets.ModelViewSet):
    """ViewSet для модели PartnerType"""
    queryset = PartnerType.objects.all()
    serializer_class = PartnerTypeSerializer


class PartnerViewSet(viewsets.ModelViewSet):
    """ViewSet для модели Partner"""
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer


class GalleryViewSet(viewsets.ModelViewSet):
    """ViewSet для модели Gallery"""
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer


class MediaViewSet(viewsets.ModelViewSet):
    """ViewSet для модели Media"""
    queryset = Media.objects.all()
    serializer_class = MediaSerializer


class RegionViewSet(viewsets.ModelViewSet):
    """ViewSet для модели Region"""
    queryset = Region.objects.all()
    serializer_class = RegionSerializer

    @action(methods=('post',), url_path='fill-regions', detail=False)
    def fill_regions(self, _):
        """Наполняем список регионов."""
        if DEBUG:
            local_dir = os.path.dirname(os.path.abspath(__file__))
            regions_source = os.path.join(local_dir, 'source', 'regions.txt')
            with open(regions_source, 'r', encoding='UTF-8') as regions_file:
                for pre_region_name in regions_file.readlines():
                    region_name = pre_region_name.strip()
                    Region.objects.create(name=region_name)
            return Response('Регионы созданы', status=status.HTTP_201_CREATED)
        pass
