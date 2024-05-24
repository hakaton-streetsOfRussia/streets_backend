from rest_framework import serializers
from django.contrib.auth.models import User
from utils.fields import Base64ImageField
from users.models import CustomUser
from blog.models import BlogPost, Region


class BlogPostSerializer(serializers.ModelSerializer):
    '''Сериализатор для постов в блоге'''
    image = Base64ImageField(required=True, allow_null=False)
    author = serializers.SlugRelatedField(
        slug_field='username',
        queryset=CustomUser.objects.all()
    )
    region = serializers.SlugRelatedField(
        many=True,
        slug_field='name',
        queryset=Region.objects.all()
    )

    class Meta:
        model = BlogPost
        fields = [
            'id',
            'author',
            'title',
            'content',
            'created_at',
            'updated_at',
            'image',
            'type',
            'relevance_date',
            'region'
        ]

    #TODO валидация type, создание relevance_date
