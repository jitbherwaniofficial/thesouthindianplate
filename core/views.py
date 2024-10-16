from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'index.html')


def privacy_policy(request):
    return render(request, 'privacy-policy.html')


def terms_and_conditions(request):
    return render(request, 'terms-and-conditions.html')


from django.template import loader

def robots_txt(request):
    template = loader.get_template('robots.txt')
    content = template.render({})
    return HttpResponse(content, content_type='text/plain')