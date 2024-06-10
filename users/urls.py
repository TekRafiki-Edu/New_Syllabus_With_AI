# users/urls.py

from django.urls import path
from .views import register_user, student_login, non_student_login

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/student/', student_login, name='student_login'),
    path('login/nonstudent/', non_student_login, name='non_student_login'),
]
