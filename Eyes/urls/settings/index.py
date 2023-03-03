from django.urls import path
from Eyes.views.settings.getinfo import getinfo

urlpatterns = [
    path("getinfo/", getinfo, name="settings_getinfo"),
]
