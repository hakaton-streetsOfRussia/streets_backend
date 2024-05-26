# Generated by Django 4.2.7 on 2024-05-25 16:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('blog', '0001_initial'),
        ('aboutus', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор поста'),
        ),
        migrations.AddField(
            model_name='blogpost',
            name='region',
            field=models.ManyToManyField(through='blog.PostRegion', to='aboutus.region'),
        ),
    ]