from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import CustomUser, StudentProfile, NonStudentProfile
from .serializers import UserSerializer, StudentProfileSerializer, NonStudentProfileSerializer
from django.utils.text import slugify


@api_view(['POST'])
def register_user(request):
    email = request.data.get('email')
    user_type = request.data.get('user_type')
    student_id = request.data.get('student_id')
    employee_id = request.data.get('employee_id')
    password = request.data.get('password')
    
    if not email or not user_type or not password:
        return Response({'error': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)
    
    if user_type == 'student' and not student_id:
        return Response({'error': 'Missing student_id for student user type'}, status=status.HTTP_400_BAD_REQUEST)
    
    if user_type != 'student' and not employee_id:
        return Response({'error': 'Missing employee_id for non-student user type'}, status=status.HTTP_400_BAD_REQUEST)
    
    if CustomUser.objects.filter(email=email).exists():
        return Response({'error': 'Email already in use'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Generate a unique username
    base_username = slugify(email.split('@')[0])
    username = base_username
    counter = 1
    while CustomUser.objects.filter(username=username).exists():
        username = f"{base_username}{counter}"
        counter += 1
    
    user = CustomUser.objects.create(
        username=username,
        email=email,
        is_student=(user_type == 'student'),
        is_lecturer=(user_type == 'lecturer'),
        institution_admin=(user_type == 'institution_admin'),
        student_id=student_id if user_type == 'student' else None,
        employee_id=employee_id if user_type != 'student' else None
    )
    user.set_password(password)
    user.save()
    
    return Response({'success': 'User registered successfully'}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def student_login(request):
    identifier = request.data.get('registration_number') or request.data.get('email')
    password = request.data.get('password')
    
    if not identifier or not password:
        return Response({'error': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)
    
    user = None
    if '@' in identifier:
        user = authenticate(email=identifier, password=password)
    else:
        try:
            profile = StudentProfile.objects.get(registration_number=identifier)
            user = authenticate(email=profile.user.email, password=password)
        except StudentProfile.DoesNotExist:
            pass
    
    if user is None or not user.is_student:
        return Response({'error': 'Invalid credentials or user is not a student'}, status=status.HTTP_400_BAD_REQUEST)
    
    profile = StudentProfile.objects.get(user=user)
    serializer = StudentProfileSerializer(profile)
    return Response({'success': serializer.data}, status=status.HTTP_200_OK)


@api_view(['POST'])
def non_student_login(request):
    employee_id = request.data.get('employee_id')
    password = request.data.get('password')
    
    if not employee_id or not password:
        return Response({'error': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        profile = NonStudentProfile.objects.get(employee_number=employee_id)
        user = authenticate(email=profile.user.email, password=password)
    except NonStudentProfile.DoesNotExist:
        user = None
    
    if user is None or user.is_student:
        return Response({'error': 'Invalid credentials or user is a student'}, status=status.HTTP_400_BAD_REQUEST)
    
    serializer = NonStudentProfileSerializer(profile)
    return Response({'success': serializer.data}, status=status.HTTP_200_OK)