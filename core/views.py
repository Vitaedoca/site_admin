from django.shortcuts import render
from django.http import HttpResponse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from news.models import News
from carrosel.models import Slide
from top10.models import TopMusic
from galeria.models import Album, Foto
from .models import ConfiguracaoSite

def show_core(request):
    news_list = News.objects.all().order_by('id').reverse()
    config = ConfiguracaoSite.objects.first()
    carrosel_config = Slide.objects.all().order_by('ordem')

    config_logo = config.logo.url if config and config.logo else None
    position_player = config.position_player if config else "top"

    top_music = TopMusic.objects.all()

    fotos = Foto.objects.all()

    # category_news_color = news_config.category.color if news_config else "#3498db"

    return render(request, 'base.html', {
        'news_list': news_list,
        'config_logo': config_logo,
        'position_player': position_player,
        'carrosel_config': carrosel_config,
        'top_music': top_music,
        'fotos': fotos
    })

def dynamic_css(request):
    config = ConfiguracaoSite.objects.first()
    news_config = News.objects.first()

    # Definindo cores e posição
    color = config.cor_principal if config else "#3498db"

    css = f"""
    :root {{
        --primary-color: {color};
    }}

    body {{
        background-color: #fff;
        font-family: 'Poppins', sans-serif;
    }}
    """

    # Retorna como CSS
    return HttpResponse(css, content_type='text/css')