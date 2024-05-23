import qrcode
from urllib.parse import unquote
from django.http import HttpResponse
from django.core.files.base import ContentFile
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied

from .models import QRCode


@login_required
def generate_qr_code(request, qr_code_name):
    if not request.user.role in ['admin', 'promoter']:
        raise PermissionDenied("У вас нет прав для создания QR-кода")

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr_code_name = unquote(qr_code_name)
    url = "https://hackathonteam3.ru" + qr_code_name
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    response = HttpResponse(content_type="image/png")
    img.save(response, "PNG")

    qr_code = QRCode(qr_code_name=qr_code_name)
    qr_code.qr_code_image.save(f"{qr_code_name}.png", ContentFile(response.getvalue()))
    qr_code.save()

    return render(request, 'qr_code.html', {'qr_code': qr_code})