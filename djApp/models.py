from django.db import models

class Data(models.Model):
    id = models.CharField(max_length=12,primary_key=True)
    secKey = models.IntegerField()
    eMessage = models.CharField()
