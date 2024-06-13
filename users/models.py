import string
import random
from django.contrib.auth.models import AbstractUser
from django.db import models


def generate_user_id():
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(15))


class CustomUser(AbstractUser):
    user_id = models.CharField(max_length=15, unique=True, default=generate_user_id)
    email = models.EmailField(unique=True)  # Add unique constraint here
    is_student = models.BooleanField(default=False)
    is_lecturer = models.BooleanField(default=False)
    institution_admin = models.BooleanField(default=False)
    student_id = models.CharField(max_length=30, blank=True, null=True)
    employee_id = models.CharField(max_length=30, blank=True, null=True)

    def save(self, *args, **kwargs):
        # Ensure that a user cannot be both a student and a staff/lecturer/admin
        if self.is_student:
            self.employee_id = None
        else:
            self.student_id = None
        if not self.user_id:
            self.user_id = generate_user_id()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.username
   
# Profile for student users
class StudentProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    registration_number = models.CharField(max_length=30)
    department = models.CharField(max_length=100)
    course = models.CharField(max_length=100)
    year_of_study = models.IntegerField()
    semester = models.IntegerField()
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

#profile for non student users lecturer, institution_admin
class NonStudentProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=30)
    departments = models.CharField(max_length=100)
    courses = models.CharField(max_length=100)
    units = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"