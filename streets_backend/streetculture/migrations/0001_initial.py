from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='StreetCulture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название')),
                ('description', models.TextField(verbose_name='Описание')),
                ('photo', models.ImageField(upload_to='streetculture/', verbose_name='Фото')),
                ('video', models.URLField(verbose_name='Видео')),
                ('culture_type', models.CharField(choices=[('SKATEBOARD', 'Скейтбординг'), ('PARKOUR', 'Паркур'), ('WORKOUT', 'Воркаут'), ('FREERUN', 'Фриран'), ('HIP-HOP DANCE', 'Хип-хоп танцы'), ('TRICKING', 'Трикинг'), ('RAP', 'Рэп'), ('BREAKING', 'Брейк-данс'), ('BMX', 'БМХ'), ('SKATEBOARDING', 'Скейтбординг'), ('SCOOT', 'Скутер')], default='SKATEBOARD', max_length=50, verbose_name='Тип культуры')),
            ],
            options={
                'verbose_name': 'Уличная культура',
                'verbose_name_plural': 'Уличные культуры',
            },
        ),
    ]
