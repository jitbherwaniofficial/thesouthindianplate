from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    changefreq = 'daily'

    def items(self):
        return [
            'home',
            'how-to-order',
            'menu',
            'dalvada',
            'idli',
            'meduvada',
            'contact',
            'privacy_policy',
            'terms_and_conditions'
        ]

    def priority(self, item):
        if item == 'home':
            return 1.0  # Highest priority for home page
        elif item in ['privacy_policy', 'terms_and_conditions']:
            return 0.3  # Lower priority for privacy policy and terms
        else:
            return 0.9  # Default priority for other pages

    def location(self, item):
        return reverse(item)
