
from django.shortcuts import render



def robot(request):
    return render(request, 'robots.txt')

def error_handler(request):
    render(request, '404.html')