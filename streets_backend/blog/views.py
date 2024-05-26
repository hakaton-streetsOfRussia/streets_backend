from django.shortcuts import get_list_or_404
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from blog.models import BlogPost
from blog.serializers import BlogPostSerializer
from users.models import UserRegion
from utils.permissions import OwnerOrReadOnly


class BlogPostViewSet(viewsets.ModelViewSet):
    '''ViewSet для модели BlogPost'''
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    # permission_classes = (OwnerOrReadOnly,)

    @action(detail=False, url_path='main-page')
    def main_page(self, request):
        '''Отображение для главной страницы.'''
        # получить пользователя
        # найти его регионы
        # найти новости из этих регионов
        request_user = request_user.user
        print(request_user.regions)
        exit()
        user_regions = get_list_or_404(UserRegion, user=request.user)
        print(user_regions)
        # region_ids = []
        # for user_region in user_regions:
        #     region_ids.append(user_region.region.id)
        # print(region_ids)
        # for obj in BlogPost.objects.filter(type='reg news'):
        #     print(obj.region.id)
        # print(BlogPost.objects.filter(type='reg news'))
        reg_news = BlogPost.objects.filter(type='reg news').filter(region__in=user_regions)[:2]
        print('reg:', reg_news)
        # fed_news = BlogPost.objects.filter(type='fed news')[:2]
        # main_news = reg_news | fed_news
        print('main: {}'.format(main_news))
        serializer = self.get_serializer(main_news)
        return Response(serializer.data)


    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    
