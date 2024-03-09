# Project Name: ** MyProject **
# Creator Name: Stoyan Dimitrov
# Creation Date: 03-03-2024
# Timestamp: 15:23:02
# Notes: 

from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

