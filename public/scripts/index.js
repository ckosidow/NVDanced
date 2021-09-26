const user = httpVueLoader('../components/user.vue');
const login = httpVueLoader('../components/login.vue');
const home = httpVueLoader('../components/home.vue');
const other = httpVueLoader('../components/other.vue');
const playlist = httpVueLoader('../components/playlist.vue');
const album = httpVueLoader('../components/album.vue');

const routes = [
    { path: '/user', name: 'user', component: user },
    { path: '/home', name: 'home', component: home },
    { path: '/login', name: 'login', component: login },
    { path: '/album', name: 'album', component: album, props: true },
    { path: '/other', name: 'other', component: other, props: true },
    { path: '/playlist', name: 'playlist', component: playlist, props: true }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    router,
    el: "#app",
    data: {
        auth: null,
        query: null,
        suggestedAlbums: [],
        suggestedArtists: [],
        suggestedPlaylists: [],
        deviceId: null,
        isPlaying: false,
        playingName: null,
        spotifyPlayer: null
    },
    methods: {
        logOut() {
            $cookies.remove('auth');

            this.auth = null;

            this.$router.push({name: 'home'});
        },
        search() {
            axios.get("/search?query=" + this.query).then((response) => {
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
            this.spotifyPlayer.getCurrentState().then(state => {
                if (!state) {
                    console.log('User is not playing music through the Web Playback SDK');

                    axios.post("/me/start-player?device_id=" + this.deviceId).then((response) => {
                        console.log("Switching playback");
                    });
                } else {
                    this.spotifyPlayer.togglePlay().then(() => {
                        // console.log('Toggled playback!');
                    });
                }

                this.isPlaying = !this.isPlaying;
                console.log(this.isPlaying);
            });
        },
        playNext() {
            this.spotifyPlayer.nextTrack().then(() => {
                // console.log('Skipped to next track!');
            });
        },
        playPrev() {
            this.spotifyPlayer.previousTrack().then(() => {
                // console.log('Back to previous track!');
            });
        },
        playSong(uri) {
            axios.post("/me/play-song?device_id=" + this.deviceId + "&uri=" + uri).then((response) => {
                console.log("Playing song");
            });
        }
    },
    mounted() {
        this.auth = $cookies.get('auth');
    },
    created() {
        window.addEventListener('click', this.clearSuggestions);

        window.onSpotifyWebPlaybackSDKReady = () => {
            this.spotifyPlayer = new Spotify.Player({
                name: 'N V Danced',
                getOAuthToken: cb => {
                    cb($cookies.get('auth'));
                },
                volume : 0.5
            });

            // Ready
            this.spotifyPlayer.addListener('ready', ({ device_id }) => {
                this.deviceId = device_id;

                console.log('Ready with Device ID', device_id);
            });

            // Not Ready
            this.spotifyPlayer.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            this.spotifyPlayer.addListener('initialization_error', ({ message }) => {
                console.error(message);
            });

            this.spotifyPlayer.addListener('authentication_error', ({ message }) => {
                console.error(message);
            });

            this.spotifyPlayer.addListener('account_error', ({ message }) => {
                console.error(message);
            });

            this.spotifyPlayer.addListener('playback_error', ({ message }) => {
                console.error(message);
            });

            this.spotifyPlayer.addListener('player_state_changed', ({
                position,
                duration,
                track_window: { current_track }}) => {
                console.log('Currently Playing', current_track);
                console.log('Position in Song', position);
                console.log('Duration of Song', duration);

                if (current_track) {
                    this.playingName = current_track.name;
                }
            });

            this.spotifyPlayer.connect().then(success => {
                if (success) {
                    console.log("The Web Playback SDK successfully connected to Spotify!");
                }
            });
        }
    },
    destroyed() {
        window.removeEventListener('click', this.clearSuggestions);
    }
});