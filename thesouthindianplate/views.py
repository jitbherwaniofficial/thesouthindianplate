
from django.shortcuts import render



def robot(request):
    return render(request, 'robots.txt')


def sitemap(request):
    return render(request, 'sitemap.xml')


