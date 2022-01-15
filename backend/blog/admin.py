from django.contrib import admin
from blog.models import Post

# Register your models here.

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'modify_dt', 'tag_list') ## admin 사이트에 보여줄 컬럼 정의

    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related('tags') ## post 레코드를 가져올때 tag 레코드도 가져와라

    def tag_list(self, obj):
        return u", ".join(o.name for o in obj.tags.all())