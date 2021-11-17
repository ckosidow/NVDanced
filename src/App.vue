<template>
  <nav class="navbar is-primary is-flex px-2" id="nvd-navbar">
    <div class="navbar-brand is-flex-grow-1">
      <router-link class="px-2 navbar-item" :to='{name:auth ? "user" : "home"}'>N V Danced</router-link>
      <div class="is-align-self-center is-flex is-flex-grow-1 px-2">
        <div class="dropdown" :class="{'is-active': suggestedArtists.length
              || suggestedPlaylists.length
              || suggestedAlbums.length}">
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <p>Albums</p>
              </div>
              <div class="dropdown-item" v-for="album in suggestedAlbums" :key="album">
                <router-link class="dropdown-item" :to="{path: '/album', query: {album_id: album.id}}"
                             v-html="album.name">
                </router-link>
              </div>
              <div class="dropdown-item">
                <hr class="dropdown-divider">
              </div>
              <div class="dropdown-item">
                <p>Playlists</p>
              </div>
              <div class="dropdown-item" v-for="playlist in suggestedPlaylists" :key="playlist">
                <router-link class="dropdown-item"
                             :to="{path: '/playlist', query: {user_id: playlist.owner.id, playlist_id: playlist.id}}"
                             v-html="playlist.name">
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <input id="nvd-search" class="is-flex-grow-1 input" v-model="query" v-on:input="search()" placeholder="search">
      </div>
      <div class="is-flex is-flex-grow-0 is-justify-content-flex-end px-2">
        <a class="has-text-white navbar-item" href="https://www.spotify.com">
          <span class="icon">
            <i class="fab fa-spotify has-white-text"></i>
          </span>
        </a>
        <a class="has-text-white navbar-item" v-show="!auth" href='api/logIn'>Log In</a>
        <a class="has-text-white navbar-item" v-show="auth" v-cloak v-on:click="logOut">Log Out</a>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  <div id="nvd-playback-padding"></div>
  <div id="nvd-playback" class="is-flex is-justify-content-center p-4" v-if="auth">
    <div id="nvd-playback-card" class="card p-2 px-4 is-flex is-flex-grow-1">
      <figure class="image mr-2 is-64x64 is-flex-shrink-0 is-align-self-center" id="nvd-playback-image-fig">
        <img id="nvd-playback-image" crossorigin="anonymous" v-if="playingImage" :src="playingImage">
      </figure>
      <span class="nvd-text is-align-self-center mx-2 has-text-white is-flex-grow-1" v-cloak>
        <span v-html="playingName"></span>
        <br/>
        <span class="is-size-7" v-html="playingArtists.join(', ')"></span>
        <br/>
        <a href="https://open.spotify.com" class="has-text-white" v-if="playingName">
          <span class="icon">
            <i class="fab fa-spotify has-white-text"></i>
          </span>
          <span class="is-size-7">Spotify</span>
        </a>
      </span>
      <button id="toggle-play" class="button mx-2 nvd-playback-button p-1 is-align-self-center"
              v-on:click="togglePlay">
        <span class="icon nvd-playback-button-text">
            <i class="fa" :class="isPlaying ? 'fa-pause' : 'fa-play'"></i>
        </span>
      </button>
      <span class="nvd-text is-align-self-center mx-2 p-1 has-text-white" v-cloak v-html="currDeviceName"></span>
      <button id="use-this-device" class="button nvd-playback-button p-1 mx-2 is-align-self-center"
              v-on:click="useThisDevice">
        <span class="icon nvd-playback-button-text">
            <i class="fa" :class="currDeviceType === 'Smartphone' ? 'fa-mobile-alt' : 'fa-laptop'"></i>
        </span>
      </button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import $cookies from 'vue-cookies'

  const thisDeviceName = 'N V Danced';
  const blockSize = 5; // only visit every 5 pixels
  const defaultRGB = {r: 0, g: 0, b: 0}; // for non-supporting envs

  export default {
    name: 'App',
    data() {
      return {
        auth: null,
        query: null,
        suggestedAlbums: [],
        suggestedArtists: [],
        suggestedPlaylists: [],
        deviceId: null,
        isPlaying: false,
        playingName: null,
        playingArtists: [],
        playingImage: null,
        spotifyPlayer: null,
        currDeviceId: null,
        currDeviceName: null,
        currDeviceType: null
      }
    },
    methods: {
      decimalToHex(d, padding) {
        let hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

        while (hex.length < padding) {
          hex = "0" + hex;
        }

        return hex;
      },
      getAverageRGB() {
        const imgEl = document.getElementById('nvd-playback-image');
        const canvas = document.createElement('canvas');
        const context = canvas.getContext && canvas.getContext('2d');
        let data, width, height,
            i = -4,
            length,
            rgb = {r: 0, g: 0, b: 0},
            count = 0;

        if (!context || !imgEl) {
          return defaultRGB;
        }

        height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
        width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

        context.drawImage(imgEl, 0, 0);

        try {
          data = context.getImageData(0, 0, width, height);
        } catch (e) {
          console.log(e);
          /* security error, img on diff domain */
          return defaultRGB;
        }

        length = data.data.length;

        while ((i += blockSize * 4) < length) {
          ++count;
          rgb.r += data.data[i];
          rgb.g += data.data[i + 1];
          rgb.b += data.data[i + 2];
        }

        // ~~ used to floor values
        rgb.r = ~~(rgb.r / count);
        rgb.g = ~~(rgb.g / count);
        rgb.b = ~~(rgb.b / count);

        let root = document.documentElement;

        root.style.setProperty('--player-background',
            '#' + this.decimalToHex(rgb.r, 2) + this.decimalToHex(rgb.g, 2) + this.decimalToHex(rgb.b, 2) + '80');

        console.log(rgb);
      },
      logOut() {
        $cookies.remove('auth');

        this.auth = null;

        this.$router.push({name: 'home'});
      },
      search() {
        axios.get("api/search?query=" + this.query).then((response) => {
          if (response.data) {
            if (response.data.albums) {
              this.suggestedAlbums = response.data.albums.items;
            }

            // if (response.data.suggestedArtists) {
            // this.suggestedArtists = response.data.artists.items;
            // }

            if (response.data.playlists) {
              this.suggestedPlaylists = response.data.playlists.items;
            }
          }
        });
      },
      clearSuggestions() {
        this.suggestedPlaylists = [];
        this.suggestedAlbums = [];
        this.suggestedArtists = [];
      },
      togglePlay() {
        if (this.isPlaying) {
          axios.post("api/me/pause").then(() => {
            // console.log("Pausing");
            this.isPlaying = false;
          });
        } else {
          if (!this.currDeviceId) {
            axios.post("api/me/start-player?device_id=" + this.deviceId + "&play=true").then(() => {
              // console.log("Switching playback");
              this.currDeviceId = this.deviceId;
            });
          }

          axios.post("api/me/play-song").then(() => {
            // console.log("Playing");
          });

          this.isPlaying = true;
        }
      },
      playSong(uri) {
        if (!this.currDeviceId) {
          axios.post("api/me/start-player?device_id=" + this.deviceId).then(() => {
            // console.log("Switching playback");
            this.currDeviceId = this.deviceId;
            this.currDeviceName = thisDeviceName;
          });
        }

        axios.post("api/me/play-song?uri=" + uri).then(() => {
          // console.log("Playing song");
          this.checkPlayback();
        });
      },
      useThisDevice() {
        if (this.currDeviceId !== this.deviceId) {
          axios.post("api/me/start-player?device_id=" + this.deviceId + "&play=" + this.isPlaying).then(() => {
            // console.log("Switching playback");
            this.currDeviceId = this.deviceId;
            this.currDeviceName = thisDeviceName;
            this.currDeviceType = 'Computer';
          });
        }
      },
      checkPlayback() {
        axios.get("api/me/get-playback").then((response) => {
          if (response.data) {
            const currPlaying = response.data;

            if (currPlaying.is_playing) {
              this.isPlaying = currPlaying.is_playing;
            }

            if (currPlaying.item) {
              this.playingName = currPlaying.item.name;
              this.playingArtists = currPlaying.item.artists.map((artist) => {
                return artist.name;
              });

              if (currPlaying.item.album && currPlaying.item.album.images) {
                this.playingImage = currPlaying.item.album.images[0].url;

                this.getAverageRGB();
              }
            }

            if (currPlaying.device) {
              this.currDeviceId = currPlaying.device.id;
              this.currDeviceName = currPlaying.device.name;
              this.currDeviceType = currPlaying.device.type;
            }
          }
        });
      }
    },
    mounted() {
      this.auth = $cookies.get('auth');
    },
    created() {
      window.addEventListener('click', this.clearSuggestions);

      window.onSpotifyWebPlaybackSDKReady = () => {
        this.spotifyPlayer = new window.Spotify.Player({
          name: thisDeviceName,
          getOAuthToken: cb => {
            cb($cookies.get('auth'));
          },
          volume: 0.5
        });

        // Ready
        this.spotifyPlayer.addListener('ready', ({device_id}) => {
          this.deviceId = device_id;

          // console.log('Ready with Device ID', device_id);
        });

        // Not Ready
        this.spotifyPlayer.addListener('not_ready', ({device_id}) => {
          this.deviceId = device_id;
          // console.log('Device ID has gone offline', device_id);
        });

        this.spotifyPlayer.addListener('initialization_error', ({message}) => {
          console.error(message);
        });

        this.spotifyPlayer.addListener('authentication_error', ({message}) => {
          console.error(message);
        });

        this.spotifyPlayer.addListener('account_error', ({message}) => {
          console.error(message);
        });

        this.spotifyPlayer.addListener('playback_error', ({message}) => {
          console.error(message);
        });

        const playbackListener = (arg) => {
          if (arg) {
            const {
              track_window: {current_track}
            } = arg;

            if (current_track) {
              this.playingImage = null;

              if (current_track.album) {
                if (current_track.album.images) {
                  this.playingImage = current_track.album.images[0].url;

                  this.getAverageRGB();
                }
              }

              this.playingName = current_track.name;
              this.playingArtists = current_track.artists.map((artist) => {
                return artist.name;
              });
            }
          } else {
            this.checkPlayback();
          }
        };

        this.spotifyPlayer.addListener('player_state_changed', playbackListener);

        this.spotifyPlayer.connect().then(success => {
          if (success) {
            // console.log("The Web Playback SDK successfully connected to Spotify!");
          }
        });
      };

      this.checkPlayback();
    },
    unmounted() {
      window.removeEventListener('click', this.clearSuggestions);
    }
  }
</script>
<style>
  :root {
    --player-background: #161e29cc;
    --under : #161e29cc;
  }

  #nvd-playback-card {
    overflow : hidden;
    background : linear-gradient(90deg, var(--player-background), var(--under), var(--under));
    backdrop-filter : blur(10px);
    pointer-events : all;
  }
</style>