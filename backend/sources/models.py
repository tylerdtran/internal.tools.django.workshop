from django.db import models

# Create your models here.
# derived from the subclass models.Model
# class Organization(models.Model):
#     name = models.CharField(max_length=255)
#     alternative_name = models.CharField(max_length=255, blank=True, null=True)
#     notes = models.TextField(blank=True, null=True)

class Source(models.Model):
    name = models.CharField(max_length=255)
    # organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    organization = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    notes = models.TextField(blank=True, null=True)