<template>
  <div class="p-5">
    <h2 class="is-size-2">
      Let's Dance
    </h2>
    <br/>
    <p>
      We think you want to dance and we think your playlists should help.
      With N V Danced we want to help make your playlists worth dancing to.
    </p>
    <br/>
    <p>
      N V Danced is an app that allows you to see stats about your Spotify playlists and songs.
      Among these stats is danceability.
      This app uses the Spotify <a class="has-text-white" href="https://developer.spotify.com/documentation/web-api/">Web API</a>
      and
      the <a class="has-text-white" href="https://developer.spotify.com/documentation/web-playback-sdk/">Web Playback SDK</a>
      to show
      you just how danceable your playlists are.
    </p>
    <hr/>
    <p>
      <small>With use of APIs from Spotify</small>
      <br/>
      <small>Copyright&#169; 2021 Conor Kosidowski</small>
    </p>
  </div>
</template>
<script>
    import $cookies from 'vue-cookies'

    export default {
        data() {
            return {}
        },
        mounted() {
            if ($cookies.get('auth')) {
                this.$router.push({name: 'user'})
            }
        }
    }
</script>