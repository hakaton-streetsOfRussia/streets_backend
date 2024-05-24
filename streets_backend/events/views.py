from rest_framework import viewsets
from .models import Event, Discipline, Region
from .serializers import EventSerializer, DisciplineSerializer, RegionSerializer


class EventViewSet(viewsets.ModelViewSet):
    """ViewSet для модели Event"""
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class DisciplineViewSet(viewsets.ModelViewSet):
    """ViewSet для модели Discipline"""
    queryset = Discipline.objects.all()
    serializer_class = DisciplineSerializer


class RegionViewSet(viewsets.ModelViewSet):
    """ViewSet для модели Region"""
    queryset = Region.objects.all()
    serializer_class = RegionSerializer