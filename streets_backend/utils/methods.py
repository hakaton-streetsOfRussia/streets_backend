from random import randint

from aboutus.models import Region


def get_confirmation_code():
    """Получение секретного кода регистрации."""
    return randint(100000000, 999999999)


def get_regions_from_ip():
    """Получение релевантных регионов из ip."""
    pass