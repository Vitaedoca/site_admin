from django.contrib import admin
from .models import News, Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'color_preview')

    def color_preview(self, obj):
        return f'<div style="width:40px; height:20px; background-color:{obj.color}; border:1px solid #000;"></div>'
    color_preview.allow_tags = True
    color_preview.short_description = "Cor"


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date')
    list_filter = ('category', 'date')
    search_fields = ('title', 'desc')
    readonly_fields = ('date',)
    