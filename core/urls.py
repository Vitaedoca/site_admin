from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_core, name='show_core'),
    path('dynamic.css', views.dynamic_css, name='dynamic-css'),
]

