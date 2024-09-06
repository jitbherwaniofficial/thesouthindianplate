
from django.shortcuts import render


def robot(request):
    return render(request, 'robots.txt')


def custom_404(request, exception):
    return render(request, '404.html', status=404)