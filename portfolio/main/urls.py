from django.urls import path
from .views import *

# app_name = 'main'
urlpatterns =[
    path('', home, name='home'),
    path('about/', about, name='about'),
    # path('portfolio/', portfolio, name='portfolio'),
    path('blogs/', blogs, name='blog'),
    
]