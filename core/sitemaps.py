from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    
    # This method defines the items (URLs) to include in the sitemap.
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

    # This method sets the priority for specific URLs.
    def priority(self, item):
        if item == 'home':
            return 1.0  # Highest priority for home page
        elif item in ['privacy_policy', 'terms_and_conditions']:
            return 0.3  # Lower priority for privacy policy and terms
        else:
            return 0.9  # Default priority for other pages

    # This method sets the change frequency for specific URLs.
    def changefreq(self, item):
        if item in ['privacy_policy', 'terms_and_conditions']:
            return 'monthly'  # Set privacy policy and terms to monthly
        else:
            return 'weekly'  # Set all other pages to weekly

    # This method returns the URL location of each item.
    def location(self, item):
        return reverse(item)
