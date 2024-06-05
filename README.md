  
# МАСТЕРСКАЯ ЯНДЕКС ПРАКТИКУМА
# ХАКАТОН "УЛИЦЫ РОССИИ"
  



## Команда проекта:
 

**Проект-менеджер:**

- [Екатерина Санникова](https://t.me/sannikovakat)
 

**Продакт-менеджер:**

- [Марина Погиева](https://t.me/mpogieva)
 

**Дизайн:**

- [Аля Ковач](https://t.me/AlyaKovach)

- [Диана Сырлыбаева](https://t.me/DianaSyrlybaeva)
 

**Фронтенд:**

- [Лев Смиронов](https://github.com/levsmirnov1999)

- [Даниил Андреев](https://github.com/accrrsd)


**Бекенд:**

- [Павел Охрим](https://github.com/d1g-1t)

- [Алексей Орел](https://github.com/orel333)
  

## Ссылка на сервер проекта:
 
Backend (Swagger) проекта: [http://95.163.230.143/swagger/](http://95.163.230.143/swagger/)

Frontend проекта: [http://95.163.230.143:3000/home/](http://95.163.230.143:3000/home)

## Инструкция по запуску в локальном окружении.
 
1. Клонируем репозиторий:
```
git@github.com:hakaton-streetsOfRussia/streets_backend.git
```
2. В папке /infra/ создаем .env с данными, взятыми из .env.example.

3. Переходим в папку /streets_backend/(где Dockerfile и requirements.txt) и создаем виртуальное окружение на версии Python 3.10:
```
python3.10 -m venv venv
```
4. Запускаем виртуальное окружение:
  - На Linux:
    ```
    source venv/bin/activate
    ```
  - На Windows:
    ```
    source venv/Scripts/activate
    ```
5. Обновляем пакетный менеджер pip:
```
python -m pip install --upgrade pip
```
6. Устанавливаем зависимости:
```
pip install -r requirements.txt
```
7. Проводим миграции:
```
python manage.py migrate
```
8. Запускаем локальный сервер:
```
python manage.py runserver
```

## Инструкция по запуску проекта в контейнере.
1. Клонируем репозиторий:
```
git@github.com:hakaton-streetsOfRussia/streets_backend.git
```
2. В папке /infra/ создаем .env с данными, взятыми из .env.example.

3. Переходим в папку /infra/

4. Запускаем сборку контейнера:
```
docker-compose -f docker compose.local.yml up
```
5. После запуска проект будет доступен по http://localhost:8000/

## Стэк технологий
- ![Django](https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=Django) Django 5.0.6
- ![Django REST Framework](https://img.shields.io/badge/-Django%20REST%20Framework-092E20?style=flat-square&logo=Django) Django REST Framework 3.15.1
- ![Gunicorn](https://img.shields.io/badge/-Gunicorn-000000?style=flat-square&logo=Gunicorn) Gunicorn 20.1.0
- ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=PostgreSQL) PostgreSQL (psycopg2-binary 2.9.3)
- ![Nginx](https://img.shields.io/badge/-Nginx-269539?style=flat-square&logo=Nginx) Nginx
- ![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker) Docker
 
## Ссылки на сторонние фреймворки, библиотеки, иконки и шрифты
- [Djoser](https://djoser.readthedocs.io/en/latest/)
- [DRF YASG](https://drf-yasg.readthedocs.io/en/stable/)
- [Django Filter](https://django-filter.readthedocs.io/en/stable/)
- [Pillow](https://pillow.readthedocs.io/en/stable/)
- [Python Decouple](https://pypi.org/project/python-decouple/)
- [QR Code](https://pypi.org/project/qrcode/)
