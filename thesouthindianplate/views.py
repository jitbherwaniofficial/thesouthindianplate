
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
            "lastmod": '2024-09-07T11:09:00+00:00',
            "priority": "1.0"
        },
        {
            "loc": "https://thesouthindianplate.com/how-to-order/",
            "lastmod": '2024-09-07T11:09:00+00:00',
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/best-idli-order-mumbai/",
            "lastmod": '2024-09-07T11:09:00+00:00',
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/best-meduvada-order-mumbai/",
            "lastmod": '2024-09-07T11:09:00+00:00',
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/best-dalvada-order-mumbai/",
            "lastmod": '2024-09-07T11:09:00+00:00',
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/menu-page/",
            "lastmod": '2024-09-07T11:09:00+00:00',
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/contact-us/",
            "lastmod": '2024-09-07T11:09:00+00:00',
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/privacy-policy/",
            "lastmod": '2024-09-07T11:09:00+00:00',
            "priority": "0.8"
        },
        {
            "loc": "https://thesouthindianplate.com/terms-and-conditions/",
            "lastmod": '2024-09-07T11:09:00+00:00',
            "priority": "0.8"
        },
        
    ]
    sitemap_xml = render_to_string("sitemap.xml", {"urls": urls})
    return HttpResponse(sitemap_xml, content_type="application/xml")



