from django.shortcuts import render, get_object_or_404
from .models import News

def show_news(request, slug):
    noticia = get_object_or_404(News, slug=slug)

    ultimas = News.objects.exclude(id=noticia.id).order_by('-date')[:5]

    return render(request, "news_now.html", {
        "noticia": noticia,
        "ultimas": ultimas
    })
