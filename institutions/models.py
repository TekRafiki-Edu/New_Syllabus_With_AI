from django.db import models
from django.utils.crypto import get_random_string
from django.conf import settings

def generate_unique_id():
    return get_random_string(length=12)

class Institution(models.Model):
    name = models.CharField(max_length=255)
    unique_id = models.CharField(max_length=12, unique=True, default=generate_unique_id)
    admin = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='administered_institution')

    def __str__(self):
        return self.name

class Department(models.Model):
    institution = models.ForeignKey(Institution, on_delete=models.CASCADE, related_name='departments')
    name = models.CharField(max_length=255)
    unique_id = models.CharField(max_length=12, unique=True, default=generate_unique_id)

    def __str__(self):
        return self.name

class Course(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='courses')
    name = models.CharField(max_length=255)
    unique_id = models.CharField(max_length=12, unique=True, default=generate_unique_id)

    def __str__(self):
        return self.name

class Unit(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='units')
    name = models.CharField(max_length=255)
    unique_id = models.CharField(max_length=12, unique=True, default=generate_unique_id)

    def __str__(self):
        return self.name
