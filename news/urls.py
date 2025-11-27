from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_news, name='show_news'),
    path("<slug:slug>/", views.show_news, name="news_detail"),

]