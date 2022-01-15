from django.db import models
from django.urls import reverse

# Create your models here.
from taggit.managers import TaggableManager


class Post(models.Model):

    title = models.CharField(verbose_name='TITLE', max_length=50)
    description = models.CharField('DESCRIPTION', max_length=100, blank=True, help_text='simple description text.')
    content = models.TextField('CONTENT')
    create_dt = models.DateTimeField('CREATE DATE', auto_now_add=True)
    modify_dt = models.DateTimeField('MODIFY DATE', auto_now=True)
    #tags = TaggableManager(blank=True)
    #owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, verbose_name='OWNER', blank=True, null=True)
    tags = TaggableManager(blank=True)


    def __str__(self):
        return self.title

    ## urls.py에서 설정한 URL의 name이나, viewname을 통해서 다시 URL로 되돌릴 수 있다.
    def get_absolute_url(self):
        return reverse('blog:post_detail', args=(self.id,))

    ## modify_dt 를 기준으로 이전 포스트 객체를 리턴
    def get_prev(self):
        return self.get_previous_by_modify_dt()

    ## 다음 포스트 객체를 리턴
    def get_next(self):
        return self.get_next_by_modify_dt()