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



from .models import CustomUser, StudentProfile

class StudentProfileSerializer(serializers.ModelSerializer):
    user_id = serializers.CharField(source='user.user_id', read_only=True)
    email = serializers.EmailField(source='user.email', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = StudentProfile
        fields = ['user_id', 'email', 'username', 'first_name', 'last_name', 'department', 'course', 'year_of_study', 'semester', 'phone_number']

    def create(self, validated_data):
        user_id = self.context['request'].data.get('user_id')
        try:
            user = CustomUser.objects.get(user_id=user_id)
        except CustomUser.DoesNotExist:
            raise serializers.ValidationError({"error": "User not found"})

        if hasattr(user, 'studentprofile'):
            raise serializers.ValidationError({"error": "Student profile already exists"})

        user.is_student = True
        user.save()

        profile = StudentProfile.objects.create(user=user, **validated_data)
        return profile

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Ensure all fields are present in the output, even if they're None
        for field in self.fields:
            if field not in ret:
                ret[field] = None
        return ret

class StudentProfileViewSerializer(serializers.ModelSerializer):
    user_id = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = StudentProfile
        fields = ['user_id']

    def validate_user_id(self, value):
        try:
            user = CustomUser.objects.get(user_id=value)
            self.context['user'] = user
        except CustomUser.DoesNotExist:
            raise serializers.ValidationError("User not found")
        return value


class NonStudentProfileSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = NonStudentProfile
        fields = ['user', 'first_name', 'last_name', 'employee_number', 'departments', 'courses', 'units', 'phone_number']
