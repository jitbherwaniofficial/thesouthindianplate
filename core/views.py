from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'index.html')

def howToOrder(request):
    return render(request, 'how-to-order.html')

def menu(request):
    return render(request, 'menu.html')

def dalvada(request):
    return render(request, 'dalvada.html')

def idli(request):
    return render(request, 'idli.html')

def meduvada(request):
    return render(request, 'meduvada.html')

def contact(request):
    return render(request, 'contact-us.html')


def privacy_policy(request):
    return render(request, 'privacy-policy.html')


def terms_and_conditions(request):
    return render(request, 'terms-and-conditions.html')