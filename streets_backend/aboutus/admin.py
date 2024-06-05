from django.contrib import admin
from aboutus.models import (AboutUs, FederalTeam,
                            RegionalTeam, PartnerType, 
                            Partner, Gallery, Media, Region)

admin.site.register(AboutUs)
admin.site.register(FederalTeam)
admin.site.register(RegionalTeam)
admin.site.register(PartnerType)
admin.site.register(Partner)
admin.site.register(Gallery)
admin.site.register(Media)

@admin.register(Region)
class RegionConfig(admin.ModelAdmin):
    list_display = (
        'id',
        'name'
    )