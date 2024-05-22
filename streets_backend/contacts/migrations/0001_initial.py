from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название организации')),
                ('inn', models.CharField(max_length=12, verbose_name='ИНН организации')),
                ('ogrn', models.CharField(max_length=13, verbose_name='ОГРН организации')),
                ('legal_address', models.CharField(max_length=255, verbose_name='Юридический адрес')),
                ('actual_address', models.CharField(max_length=255, verbose_name='Фактический адрес')),
                ('email', models.EmailField(max_length=254, verbose_name='Адрес электронной почты')),
                ('phone', models.CharField(max_length=20, verbose_name='Телефон')),
            ],
            options={
                'verbose_name': 'Контакт',
                'verbose_name_plural': 'Контакты',
            },
        ),
    ]
