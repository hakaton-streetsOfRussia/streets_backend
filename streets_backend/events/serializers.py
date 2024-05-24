from rest_framework import serializers
from .models import Event, Discipline, Region


class EventSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Event"""
    class Meta:
        model = Event
        fields = [
            'id', 'name', 'time', 'date', 'place', 'description', 'event_type', 'discipline', 'region'
        ]


class DisciplineSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Discipline"""
    class Meta:
        model = Discipline
        fields = ['id', 'name']


class RegionSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Region"""
    class Meta:
        model = Region
        fields = ['id', 'name']
