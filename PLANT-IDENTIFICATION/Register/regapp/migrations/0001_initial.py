# Generated by Django 3.1.1 on 2020-09-24 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='userdetails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Email', models.EmailField(max_length=254)),
                ('Username', models.CharField(max_length=20)),
                ('Password', models.CharField(max_length=8)),
            ],
        ),
    ]
