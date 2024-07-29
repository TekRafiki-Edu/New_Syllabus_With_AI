from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Institution, Department, Course, Unit
from .serializers import InstitutionSerializer, DepartmentSerializer, CourseSerializer, UnitSerializer

class InstitutionViewSet(viewsets.ModelViewSet):
    queryset = Institution.objects.all()
    serializer_class = InstitutionSerializer

    @action(detail=True, methods=['post'])
    def add_department(self, request, pk=None):
        institution = self.get_object()
        name = request.data.get('name')
        if name:
            department = Department.objects.create(institution=institution, name=name)
            return Response({'status': 'department created', 'department_id': department.unique_id})
        else:
            return Response({'status': 'name field is required'}, status=400)

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

    @action(detail=True, methods=['post'])
    def add_course(self, request, pk=None):
        department = self.get_object()
        name = request.data.get('name')
        if name:
            course = Course.objects.create(department=department, name=name)
            return Response({'status': 'course created', 'course_id': course.unique_id})
        else:
            return Response({'status': 'name field is required'}, status=400)

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    @action(detail=True, methods=['post'])
    def add_unit(self, request, pk=None):
        course = self.get_object()
        name = request.data.get('name')
        if name:
            unit = Unit.objects.create(course=course, name=name)
            return Response({'status': 'unit created', 'unit_id': unit.unique_id})
        else:
            return Response({'status': 'name field is required'}, status=400)

class UnitViewSet(viewsets.ModelViewSet):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer
