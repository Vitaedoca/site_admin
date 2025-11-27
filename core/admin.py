# admin.py
from django.contrib import admin
from django import forms
from .models import ConfiguracaoSite

@admin.register(ConfiguracaoSite)
class ConfiguracaoSiteAdmin(admin.ModelAdmin):

    # 🔒 Impede criar mais de uma configuração
    def has_add_permission(self, request):
        return not ConfiguracaoSite.objects.exists()

    # 🎛 Deixa o campo position_player aparecer como radio button
    def formfield_for_choice_field(self, db_field, request, **kwargs):
        if db_field.name == "position_player":
            kwargs["widget"] = forms.RadioSelect
        return super().formfield_for_choice_field(db_field, request, **kwargs)
