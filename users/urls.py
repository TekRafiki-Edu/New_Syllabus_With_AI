# users/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import register_user, student_login, non_student_login
from .import views


urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/student/', student_login, name='student_login'),
    path('login/nonstudent/', non_student_login, name='non_student_login'),
    path('student-profile/', views.StudentProfileView.as_view(), name='student-profile'),
]
