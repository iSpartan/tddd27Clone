from django.conf.urls import patterns, include, url
from .api import RankingList, RankingDetail
from .api import UserDetail

user_urls = patterns('',
                     url(r'^/(?P<username>[0-9a-zA-Z_-]+$)', UserDetail.as_view(), name='user_detail'))

ranking_urls = patterns('',
                        url(r'^/(?P<pk>\d+)/rankingdetail$',RankingDetail.as_view(), name='RankingDetail'),
                        url(r'^/(?P<pk>\d+)$',RankingList.as_view(), name='RankingList'),
                        )

urlpatterns = patterns('',
                       url(r'^users', include(user_urls)),
                       url(r'^ranking', include(ranking_urls)),
                       )