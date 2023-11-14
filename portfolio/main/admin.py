from django.contrib import admin

from .models import *

# Register your models here.
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'user')

@admin.register(Media)
class MediaAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'score')

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_active')
    readonly_fields = ('slug',)
