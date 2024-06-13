from rest_framework import serializers
from .models import Institution, Department, Course, Unit

class InstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institution
        fields = ['name', 'unique_id', 'admin']

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['institution', 'name', 'unique_id']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['department', 'name', 'unique_id']

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = ['course', 'name', 'unique_id']
