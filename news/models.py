from django.db import models
from colorfield.fields import ColorField
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils.text import slugify  # ← IMPORT NECESSÁRIO


class Category(models.Model):
    name = models.CharField("Nome", max_length=100, unique=True)
    color = ColorField("Cor (hex)", max_length=7, help_text="Ex: #FF5733")

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.name



class News(models.Model):
    title = models.CharField("Título", max_length=200)
    slug = models.SlugField(blank=True, null=True, unique=True)
    date = models.DateField("Data de publicação", auto_now_add=True)
    desc = models.TextField("Resumo", help_text="Breve descrição para o card")
    content = RichTextUploadingField("Conteúdo principal", help_text="Texto completo da notícia")
    img = models.ImageField("Imagem", upload_to='news_images/')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="news")

    class Meta:
        verbose_name = "Notícia"
        verbose_name_plural = "Notícias"
        ordering = ['-date']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.title)[:50]  # corta o slug no limite
            slug = base_slug
            counter = 1

            while News.objects.filter(slug=slug).exists():
                # adiciona "-1", "-2", etc sem ultrapassar o limite
                suffix = f"-{counter}"
                slug = f"{base_slug[:50 - len(suffix)]}{suffix}"
                counter += 1

            self.slug = slug

        super().save(*args, **kwargs)

