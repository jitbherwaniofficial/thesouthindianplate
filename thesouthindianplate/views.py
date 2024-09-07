
from django.shortcuts import render



def robot(request):
    return render(request, 'robots.txt')


# from django.http import HttpResponseNotFound

# def custom_404(request, exception):
#     return HttpResponseNotFound('404.html')