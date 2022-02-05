from .base import *

SECRET_KEY = 'django-insecure-h^@rpdw7(35j5(q)tpfk-d4t6w!hmo^$&8kpqdyw^pb1^o2chv'

DEBUG = True

## 개발모드에서는 공백으로 둘 수 있다
ALLOWED_HOSTS = ['*']

DATABASES = {
    # 'default': {
    #     'ENGINE': 'django.db.backends.sqlite3',
    #     'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    # }
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'blog',  # DB name
        'USER': 'blog',  # DB account
        'PASSWORD': 'blog123!@#',  # DB account's password
        'HOST': '127.0.0.1',  # DB address(IP)
        'PORT': '3306',  # DB port(normally 3306)
    }
}