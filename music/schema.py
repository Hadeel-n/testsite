import graphene
from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from .models import Album, Song

class AlbumNode(DjangoObjectType):
    class Meta:
        model = Album
        filter_fields = ['album_title', 'artist']
        interfaces = (relay.Node,)

class SongNode(DjangoObjectType):
    class Meta:
        model = Song
        filter_fields = ['album', 'song_title']
        interfaces = (relay.Node,)


class Query(graphene.ObjectType):
    album = relay.Node.Field(AlbumNode)
    all_albums = DjangoFilterConnectionField(AlbumNode)

    song = relay.Node.Field(SongNode)
    all_songs = DjangoFilterConnectionField(SongNode)

