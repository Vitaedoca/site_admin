from django.db import models
from django.core.exceptions import ValidationError
from PIL import Image

def validar_tamanho(imagem):
    if imagem.size > 2 * 1024 * 1024: # 2MB
        raise ValidationError("A imagem não pode ter mais que 2MB.")

class Slide(models.Model):
    titulo = models.CharField(max_length=50)
    texto = models.CharField(max_length=120)
    imagem = models.ImageField(upload_to='carrossel/', 
                               validators=[validar_tamanho])

    ordem = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.titulo  
