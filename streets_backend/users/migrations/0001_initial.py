# Generated by Django 4.2.7 on 2024-05-25 16:22

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import users.validators
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('aboutus', '0001_initial'),
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('bio', models.TextField(blank=True, null=True, verbose_name='Дополнительная информация')),
                ('role', models.CharField(choices=[('admin', 'Администратор'), ('fed manager', 'Федеральный руководитель'), ('reg manager', 'Региональный руководитель'), ('participant', 'Участник')], default='participant', max_length=16, verbose_name='Роль')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='E-mail')),
                ('username', models.CharField(max_length=150, unique=True, validators=[django.core.validators.RegexValidator(inverse_match=True, message='Попытка регистрации пользователя под me-образным именем', regex='^[mM][eE]$')], verbose_name='Имя пользователя')),
                ('last_name', models.CharField(blank=True, max_length=150, null=True, verbose_name='Фамилия')),
                ('first_name', models.CharField(blank=True, max_length=150, null=True, verbose_name='Имя')),
                ('third_name', models.CharField(blank=True, max_length=150, null=True, verbose_name='Отчество')),
                ('birth_date', models.DateField(blank=True, null=True, validators=[users.validators.validate_birthday], verbose_name='День рождения')),
                ('tg_nick', models.CharField(blank=True, max_length=32, null=True, unique=True, validators=[django.core.validators.RegexValidator(message='Некорректный ник телеграм', regex='^@[\\w\\d_]{5,32}$')], verbose_name='Имя пользователя в телеграм')),
                ('phone', models.CharField(blank=True, max_length=11, null=True, unique=True, validators=[django.core.validators.RegexValidator(message='Введите реальный мобильный телефон в формате 89XXXXXXXXX', regex='^89\\d{9}$')], verbose_name='Мобильный телефон')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Аватар')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
            ],
            options={
                'verbose_name': 'пользователь',
                'verbose_name_plural': 'пользователи',
                'ordering': ('-date_joined',),
            },
        ),
        migrations.CreateModel(
            name='UserRegion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aboutus.region')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'пользователь-регион',
                'verbose_name_plural': 'пользователи-регионы',
            },
        ),
        migrations.AddField(
            model_name='customuser',
            name='regions',
            field=models.ManyToManyField(through='users.UserRegion', to='aboutus.region'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions'),
        ),
    ]
