from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import StudentProfile, NonStudentProfile

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'user_id', 'is_student', 'is_lecturer', 'institution_admin', 'student_id', 'employee_id']

class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = '__all__'

class NonStudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = NonStudentProfile
        fields = '__all__'