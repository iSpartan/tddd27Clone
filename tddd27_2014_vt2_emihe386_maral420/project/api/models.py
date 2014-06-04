from django.db import models

from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    followers = models.ManyToManyField('self', related_name='followees',
                                       symmetrical=False)

class Ranking(models.Model):
    course=models.CharField(max_length=200)
    greenfee=models.CharField(max_length=50)
    rating=models.CharField(max_length=100)
    