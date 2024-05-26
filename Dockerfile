FROM python:3.10

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip && \
    pip install -r requirements.txt --no-cache-dir

COPY . .

ENV DJANGO_SETTINGS_MODULE=streets_backend.settings

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "streets_backend.wsgi"]