from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название мероприятия')),
                ('time', models.TimeField(verbose_name='Время проведения')),
                ('date', models.DateField(verbose_name='Дата проведения')),
                ('place', models.CharField(max_length=255, verbose_name='Место проведения')),
                ('description', models.TextField(verbose_name='Описание мероприятия')),
            ],
            options={
                'verbose_name': 'Мероприятие',
                'verbose_name_plural': 'Мероприятия',
            },
        ),
    ]
