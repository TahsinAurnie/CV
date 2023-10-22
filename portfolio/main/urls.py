from django.urls import path
from .views import *

app_name = 'main'
urlpatterns =[
    path('', home, name='home'),
    path('', portfolio, name='portfolio'),
    # path('blog/', views.BlogView.as_view(), name='blogs'),
    # path('blog/<slug:slug>', views.BlogDetailView.as_view(), name='blog'),
    # path('contact/', views.IndexView.as_view(), name='main'),
    # path('', views.IndexView.as_view(), name='main'),
    # path('', views.IndexView.as_view(), name='main'),
]