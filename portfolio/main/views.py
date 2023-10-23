from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'header_home.html')
# def portfolio(request):
#     return render(request, 'portfolio.html')
