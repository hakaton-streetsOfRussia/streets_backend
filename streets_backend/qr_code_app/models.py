from django.db import models


class QRCode(models.Model):
    """Модель QR-кода для улиц"""
    qr_code_name = models.CharField(
        'Название QR-кода',
        max_length=200
    )
    qr_code_image =models.ImageField(
        'Изображение QR-кода',
        upload_to='qr_codes', 
        blank=True, 
        null=True
    )
