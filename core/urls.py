from django.contrib import admin
from django.urls import path

from core import views


urlpatterns = [
    path('', views.home, name='home'),
    path('how-to-order', views.howToOrder, name='how-to-order'),
    path('menu-page', views.menu, name='menu'),
    path('best-dalvada-order-mumbai', views.dalvada, name='dalvada'),
    path('best-idli-order-mumbai', views.idli, name='idli'),
    path('best-meduvada-order-mumbai', views.meduvada, name='meduvada'),
    path('contact-us', views.contact, name='contact'),
    path('privacy-policy', views.privacy_policy, name='privacy_policy'),
    path('terms-and-conditions', views.terms_and_conditions, name='terms_and_conditions'),
    path('robots.txt', views.robots_txt, name='robots_txt'),
]