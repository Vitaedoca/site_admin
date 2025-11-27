from django.db import models
from colorfield.fields import ColorField
from django.contrib import admin
from django.utils.html import format_html

class ConfiguracaoSite(models.Model):
    cor_principal = ColorField(
        max_length=7,
        help_text="Cor principal do site em formato hexadecimal (ex: #3498db)",
        default="#3498db"
    )

    logo = models.ImageField(
        upload_to='logos/',
        help_text="Envie a logo do site",
        blank=True,
        null=True
    )

    position_player = models.CharField(
        max_length=11,
        choices=[
            ('top', 'No topo do site'),
            ('bottom', 'Na parte de baixo do site')
        ],
        default='top',
        verbose_name="Posição do player",
        help_text="Posição do player de música na tela"
    )

    def __str__(self):
        return f"Configuração do site ({self.cor_principal})"
