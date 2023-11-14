from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import PageNotAnInteger, EmptyPage, Paginator
from .models import(
    Blog
)

# Create your views here.
def home(request):
    blogs = Blog.objects.filter(is_active = True)
    
    context = {
        "blogs": blogs,
        # "paginator": paginator,
    }
    return render(request, 'index.html', context)

def about(request):
    return render(request, 'about.html')

def blogs(request):
    queryset = Blog.objects.filter(is_active = True)
    page = request.GET.get('page', 1)   
    paginator = Paginator(queryset, 3)  
    try:
        blogs = paginator.page(page)
    except EmptyPage:
        blogs = paginator.page(1)
    except PageNotAnInteger:
        blogs = paginator.page(1)
        return redirect('blogs')
    context = {
        "blogs": blogs,
        "paginator": paginator
    }
    return render(request, 'blog.html', context)

def about(request):
    return render(request, 'about.html')
