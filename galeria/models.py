from django.db import models
from django.utils.html import mark_safe

class Album(models.Model):
    nome = models.CharField(max_length=120)
    criado_em = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["nome"]

    def __str__(self):
        return self.nome


class Foto(models.Model):
    album = models.ForeignKey(
        Album,
        on_delete=models.CASCADE,
        related_name="fotos"
    )

    imagem = models.ImageField(upload_to="galeria/")
    titulo = models.CharField(max_length=120, blank=True)

    criado_em = models.DateTimeField(auto_now_add=True)

    # 👉 Preview APÓS subir
    def preview(self):
        if self.imagem:
            return mark_safe(f'<img src="{self.imagem.url}" width="120" style="border-radius:10px;" />')
        return "(sem imagem)"
    preview.short_description = "Preview"

    def __str__(self):
        return self.titulo if self.titulo else f"Foto {self.id}"
