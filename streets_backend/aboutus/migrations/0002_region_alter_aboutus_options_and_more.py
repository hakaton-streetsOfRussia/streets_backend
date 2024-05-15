# Generated by Django 5.0.6 on 2024-05-15 10:32

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aboutus', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название региона')),
            ],
            options={
                'verbose_name': 'Регион',
                'verbose_name_plural': 'Регионы',
            },
        ),
        migrations.AlterModelOptions(
            name='aboutus',
            options={'verbose_name': 'О нас', 'verbose_name_plural': 'О нас'},
        ),
        migrations.AlterModelOptions(
            name='federalteam',
            options={'verbose_name': 'Федеральная команда', 'verbose_name_plural': 'Федеральные команды'},
        ),
        migrations.AlterModelOptions(
            name='gallery',
            options={'verbose_name': 'Галерея', 'verbose_name_plural': 'Галереи'},
        ),
        migrations.AlterModelOptions(
            name='media',
            options={'verbose_name': 'Медиа', 'verbose_name_plural': 'Медиа'},
        ),
        migrations.AlterModelOptions(
            name='partner',
            options={'verbose_name': 'Партнер проекта', 'verbose_name_plural': 'Партнеры проекта'},
        ),
        migrations.AlterModelOptions(
            name='partnertype',
            options={'verbose_name': 'Тип партнера', 'verbose_name_plural': 'Типы партнеров'},
        ),
        migrations.AlterModelOptions(
            name='regionalteam',
            options={'verbose_name': 'Региональная команда', 'verbose_name_plural': 'Региональные команды'},
        ),
        migrations.AlterField(
            model_name='federalteam',
            name='name',
            field=models.CharField(max_length=255, verbose_name='Наименование'),
        ),
        migrations.AlterField(
            model_name='gallery',
            name='name',
            field=models.CharField(max_length=255, verbose_name='Название галереи'),
        ),
        migrations.AlterField(
            model_name='media',
            name='file',
            field=models.FileField(upload_to='media/', verbose_name='Файл медиа'),
        ),
        migrations.AlterField(
            model_name='partner',
            name='name',
            field=models.CharField(max_length=255, verbose_name='Наименование'),
        ),
        migrations.AlterField(
            model_name='partner',
            name='type',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='aboutus.partnertype', verbose_name='Тип партнера'),
        ),
        migrations.AlterField(
            model_name='regionalteam',
            name='name',
            field=models.CharField(max_length=255, verbose_name='Наименование'),
        ),
    ]
