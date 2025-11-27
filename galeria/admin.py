from django.contrib import admin
from .models import Album, Foto

class FotoInline(admin.TabularInline):
    model = Foto
    extra = 1
    fields = ("imagem", "titulo", "preview")
    readonly_fields = ("preview",)


@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    list_display = ("nome", "criado_em")
    inlines = [FotoInline]


@admin.register(Foto)
class FotoAdmin(admin.ModelAdmin):
    list_display = ("id", "titulo", "album", "preview")
    readonly_fields = ("preview",)
    list_filter = ("album",)
    search_fields = ("titulo",)
