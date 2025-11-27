from django.contrib import admin
from .models import TopMusic

@admin.register(TopMusic)
class TopMusicAdmin(admin.ModelAdmin):
    list_display = ("posicao", "artista", "musica")
    list_filter = ("posicao",)
    search_fields = ("artista", "musica")
    ordering = ("posicao",)
    list_editable = ("artista", "musica")  # editar diretamente na lista
    list_per_page = 20

    # checkbox para selecionar vários
    actions = ["limpar_top10"]

    def limpar_top10(self, request, queryset):
        queryset.delete()
        self.message_user(request, "Itens selecionados removidos.")
    
    limpar_top10.short_description = "Apagar itens selecionados"
