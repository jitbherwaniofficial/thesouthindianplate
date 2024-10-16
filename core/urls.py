from django.contrib import admin
from django.urls import path

from core import views


urlpatterns = [
    path('', views.home, name='home'),
    path('privacy-policy', views.privacy_policy, name='privacy_policy'),
    path('terms-and-conditions', views.terms_and_conditions, name='terms_and_conditions'),
    path('robots.txt', views.robots_txt, name='robots_txt'),
]