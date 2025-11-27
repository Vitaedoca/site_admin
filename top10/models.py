from django.db import models
from django.core.exceptions import ValidationError

class TopMusic(models.Model):

    POSICOES = [(i, f"Top {i}") for i in range(1, 11)]

    posicao = models.PositiveSmallIntegerField(
        choices=POSICOES,
        unique=True,
        help_text="Escolha a posição no ranking (1 a 10)"
    )

    artista = models.CharField(max_length=100)
    musica = models.CharField(max_length=150)
    foto = models.ImageField(upload_to="top10/")  # pasta: /media/top10/

    criado_em = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["posicao"]
        verbose_name = "Top 10 Música"
        verbose_name_plural = "Top 10 Músicas"

    def __str__(self):
        return f"#{self.posicao} - {self.artista} - {self.musica}"
