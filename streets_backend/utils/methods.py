import os

import requests

from random import randint
from typing import Optional

from aboutus.models import Region


def get_confirmation_code():
    """Получение секретного кода регистрации."""
    return randint(100000000, 999999999)


def get_region_from_ip(ip: str) -> list[Region]:
    """Получение релевантных регионов из ip."""
    region_name = get_location(ip)
    print(region_name)
    if region_name is None:
        return None
    region_object = Region.objects.get(name=region_name)
    return region_object.id


def get_location(ip: str) -> Optional[str]:
    """Получение информации о геопозиции."""
    response = requests.get(f"http://ip-api.com/json/{ip}?lang=ru")
    if response.status_code == 404:
        return None
    result = response.json()
    if result["status"] == "fail":
        return None
    country = result.get('country')
    if country != 'Россия':
        return None
    region = result.get('regionName')
    return region
    
