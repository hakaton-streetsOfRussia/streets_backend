from django.db import models


class Event(models.Model):
    '''Модель мероприятия'''
    EVENT_TYPES = (
        ('competition', 'Соревнование'),
        ('training', 'Тренировка'),
        ('event', 'Мероприятие'),
    )

    DISCIPLINES = (
        ('STREET-ART', 'STREET-ART'),
        ('PARKOUR', 'PARKOUR'),
        ('WORKOUT', 'WORKOUT'),
        ('БМХ', 'БМХ'),
        ('СКЕЙТБОРДИНГ', 'СКЕЙТБОРДИНГ'),
        ('ТРЮКОВОЙ САМОКАТ', 'ТРЮКОВОЙ САМОКАТ'),
        ('ФРИРАН', 'ФРИРАН'),
        ('ТРИКИНГ', 'ТРИКИНГ'),
        ('БРЕЙК-ДАНС', 'БРЕЙК-ДАНС'),
        ('ГРАФФИТИ', 'ГРАФФИТИ'),
        ('ДИДЖЕИНГ', 'ДИДЖЕИНГ'),
        ('РЕП', 'РЕП'),
    )

    name = models.CharField(
        'Название мероприятия',
        max_length=255
    )
    time = models.TimeField(
        'Время проведения'
    )
    date = models.DateField(
        'Дата проведения'
    )
    place = models.CharField(
        'Место проведения',
        max_length=255
    )
    description = models.TextField(
        'Описание мероприятия'
    )
    region = models.CharField(
        'Регион',
        max_length=255
    )
    event_type = models.CharField(
        'Тип события',
        max_length=50,
        choices=EVENT_TYPES
    )
    discipline = models.CharField(
        'Дисциплина',
        max_length=50,
        choices=DISCIPLINES
    )

    class Meta:
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'

    def __str__(self):
        return self.name


class Coordinates(models.Model):
    '''Модель координат'''
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return f'{self.latitude}, {self.longitude}'


class EventLocation(models.Model):
    '''Модель местоположения мероприятия'''
    name = models.CharField(max_length=255)
    description = models.TextField()
    address = models.CharField(max_length=255)
    coordinates = models.OneToOneField(Coordinates, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
