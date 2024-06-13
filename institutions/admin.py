from django.contrib import admin

from .models import Institution, Department, Course, Unit

admin.site.register(Institution)
admin.site.register(Department)
admin.site.register(Course)
admin.site.register(Unit)
