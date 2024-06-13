from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import StudentProfile, NonStudentProfile
from . import models

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'user_id', 'is_student', 'is_lecturer', 'institution_admin', 'student_id', 'employee_id']


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ['user_id', 'email', 'is_student', 'is_lecturer', 'institution_admin', 'student_id', 'employee_id']


class StudentProfileSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = StudentProfile
        fields = ['user', 'first_name', 'last_name', 'registration_number', 'department', 'course', 'year_of_study', 'semester', 'phone_number']



class NonStudentProfileSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = NonStudentProfile
        fields = ['user', 'first_name', 'last_name', 'employee_number', 'departments', 'courses', 'units', 'phone_number']
