from rest_framework import generics

from .serializers import UserSerializer, RankingSerializer
from .models import User, Ranking

class UserDetail(generics.ListAPIView):
    model=User
    serializer_class = UserSerializer

class RankingList(generics.ListAPIView):
    model = Ranking
    serializer_class = RankingSerializer

class RankingDetail(generics.ListAPIView):
    model = Ranking
    serializer_class = RankingSerializer