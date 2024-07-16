from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from netbotAuth.forms.user import CustomUserChangeForm, CustomUserCreationForm
from netbotAuth.models.users import User


# Register your models here.
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    ordering = ['email', ]
    list_display = ('email', 'is_staff', 'is_active',)
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
         ),
    )
    search_fields = ('email',)


# admin.site.register(User, CustomUserAdmin)
# admin.site.register(Profile)
