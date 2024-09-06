
from django.shortcuts import render


def robot(request):
    return render(request, 'robots.txt')

def error_404(request, exception):
    data = {"name": "thesouthindianplate.com"}
    return render(request,'404.html', data)
