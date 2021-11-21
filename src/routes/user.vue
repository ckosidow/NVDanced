<template>
  <div class="container p-5" v-if="user">
    <div class="columns is-mobile">
      <div class="column is-3" v-if="user.images && user.images.length">
        <figure class="image">
          <img class="is-96x96" :src="user.images[0].url"/>
        </figure>
      </div>
      <div class="column is-9">
        <h3 class="is-size-3" v-html="user.display_name"></h3>
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
    <div class="columns is-mobile is-multiline" v-if="playlists">
      <div v-for="playlist in playlists.items" class="column is-2-desktop is-3-tablet is-4-mobile" :key="playlist">
        <router-link :to="{path: '/playlist', query: { user_id: playlist.owner.id, playlist_id: playlist.id }}">
          <figure class="image">
            <img class="is-256x256" :src="playlist.images[0].url"/>
          </figure>
        </router-link>
        <router-link :to="{path: '/playlist', query: { user_id: playlist.owner.id, playlist_id: playlist.id}}">
          <h4 class="is-size-5 has-text-white" v-html="playlist.name"></h4>
        </router-link>
        <router-link class="has-text-white" :to="{path: '/other', query: { user_id: playlist.owner.id}}">
          <p class="is-size-6" v-html="playlist.owner.display_name"></p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                user: null,
                playlists: null
            }
        },
        mounted() {
            axios.get("api/me").then((response) => {
                this.user = response.data.user;
                this.playlists = response.data.playlists;
            });
        },
        methods: {}
    }
</script>