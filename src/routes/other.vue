<template>
  <div class="container p-5" v-if="user">
    <div class="columns is-mobile">
      <div class="column is-3" v-if="user.images.length">
        <figure class="image">
          <img class="is-96x96" :src="user.images[0] ? user.images[0].url : ''"/>
        </figure>
      </div>
      <div class="column is-9">
        <h3 class="is-size-3">
          {{user.display_name}}
        </h3>
        <p>
          <a href="https://open.spotify.com" class="has-text-white">
              <span class="icon">
                <i class="fab fa-spotify has-white-text"></i>
              </span>
            <span class="is-size-7">Open Spotify</span>
          </a>
        </p>
      </div>
    </div>
    <div class="columns is-mobile is-multiline">
      <div v-for="playlist in playlists.items" class="column is-2-desktop is-3-tablet is-4-mobile"
           :key="playlist">
        <router-link v-if="playlist.images.length" :to="{path: '/playlist',
                                    query: {user_id: playlist.owner.id, playlist_id: playlist.id}}">
          <figure class="image">
            <img class="is-96x96" :src="playlist.images[0] ? playlist.images[0].url : ''"/>
          </figure>
        </router-link>
        <router-link :to="{path: '/playlist',
                                    query: {user_id: playlist.owner.id, playlist_id: playlist.id}}">
          <h4 class="is-size-5 has-text-white">
            {{playlist.name}}
          </h4>
        </router-link>
        <p class="is-size-6">
          <router-link class="has-text-white"
                       :to="{path: '/other', query: {user_id: playlist.owner.id}}">
            {{playlist.owner.display_name}}
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
    import axios from 'axios'

    export default {
        props: ['user_id'],
        data() {
            return {
                user: null,
                playlists: null
            }
        },
        mounted() {
            this.updatePage();
        },
        methods: {
            updatePage() {
                axios.get("api/other?user_id=" + this.$route.query.user_id).then((response) => {
                    this.user = response.data.user;
                    this.playlists = response.data.playlists;
                });
            }
        },
        watch: {
            $route (to){
                if (to.name === 'other') {
                    this.updatePage();
                }
            }
        }
    }
</script>