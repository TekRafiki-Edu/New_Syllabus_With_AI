# users/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import register_user, student_login, non_student_login
from .import views


router = DefaultRouter()
router.register(r'student_profiles', views.StudentProfileViewSet, basename='studentprofile')
router.register(r'non_student_profiles', views.NonStudentProfileViewSet, basename='nonstudentprofile')


urlpatterns = [
    path('', include(router.urls)),
    path('register/', register_user, name='register_user'),
    path('login/student/', student_login, name='student_login'),
    path('login/nonstudent/', non_student_login, name='non_student_login'),
]
