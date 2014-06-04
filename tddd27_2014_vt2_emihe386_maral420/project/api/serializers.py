from rest_framework import serializers

from .models import User, Ranking

class UserSerializer(serializers.ModelSerializer):
    posts = ''
    class Meta:
        model=User
        fields=('id', 'username', 'first_name', 'last_name', 'posts')

class RankingSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Ranking