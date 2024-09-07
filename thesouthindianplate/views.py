
from django.shortcuts import render



def robot(request):
    return render(request, 'robots.txt')


from django.http import HttpResponse
from django.template.loader import render_to_string
from django.utils import timezone

def sitemap_view(request):
    urls = [
        {
            "loc": "https://thesouthindianplate.com/",
            "lastmod": timezone.now().date(),
            "priority": "1.0"
        },
        {
            "loc": "https://thesouthindianplate.com/how-to-order/",
            "lastmod": timezone.now().date(),
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/best-idli-order-mumbai/",
            "lastmod": timezone.now().date(),
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/best-meduvada-order-mumbai/",
            "lastmod": timezone.now().date(),
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/best-dalvada-order-mumbai/",
            "lastmod": timezone.now().date(),
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/menu-page/",
            "lastmod": timezone.now().date(),
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/contact-us/",
            "lastmod": timezone.now().date(),
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/privacy-policy/",
            "lastmod": timezone.now().date(),
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/terms-and-conditions/",
            "lastmod": timezone.now().date(),
            "priority": "0.8"
        },
        # Add more URLs dynamically or manually here
    ]
    sitemap_xml = render_to_string("sitemap.xml", {"urls": urls})
    return HttpResponse(sitemap_xml, content_type="application/xml")



