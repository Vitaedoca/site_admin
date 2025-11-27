from django.db import migrations
from django.utils.text import slugify


def gerar_slugs(apps, schema_editor):
    News = apps.get_model('news', 'News')
    for item in News.objects.all():
        if not item.slug:
            base_slug = slugify(item.title)
            slug = base_slug
            counter = 1

            # evita duplicados
            while News.objects.filter(slug=slug).exclude(id=item.id).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1

            item.slug = slug
            item.save()


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0005_alter_news_slug'),  # ajuste para a última migração existente
    ]

    operations = [
        migrations.RunPython(gerar_slugs),
    ]
