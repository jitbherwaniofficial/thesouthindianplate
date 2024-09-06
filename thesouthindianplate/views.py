
from django.shortcuts import render


def robot(request):
    return render(request, 'robots.txt')

def custom_page_not_found(request, *args, template_name="404.html", **kargs):
    return render(None, template_name, status=404)
