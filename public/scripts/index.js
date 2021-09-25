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

let spotifyPlayer;

const app = new Vue({
    router,
    el: "#app",
    data: {
        auth: null,
        query: null,
        suggestedAlbums: [],
        suggestedArtists: [],
        suggestedPlaylists: []
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
            spotifyPlayer.togglePlay().then(() => {
                // console.log('Toggled playback!');
            });
        },
        playNext() {
            spotifyPlayer.nextTrack().then(() => {
                // console.log('Skipped to next track!');
            });
        },
        playPrev() {
            spotifyPlayer.previousTrack().then(() => {
                // console.log('Back to previous track!');
            });
        }
    },
    mounted() {
        this.auth = $cookies.get('auth');
    },
    created() {
        window.addEventListener('click', this.clearSuggestions);

        window.onSpotifyWebPlaybackSDKReady = () => {
            spotifyPlayer = new Spotify.Player({
                name: 'N V Danced',
                getOAuthToken: cb => {
                    cb($cookies.get('auth'));
                },
                volume : 0.5
            });

            // Ready
            spotifyPlayer.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            // Not Ready
            spotifyPlayer.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            spotifyPlayer.addListener('initialization_error', ({ message }) => {
                console.error(message);
            });

            spotifyPlayer.addListener('authentication_error', ({ message }) => {
                console.error(message);
            });

            spotifyPlayer.addListener('account_error', ({ message }) => {
                console.error(message);
            });

            spotifyPlayer.addListener('playback_error', ({ message }) => {
                console.error(message);
            });

            spotifyPlayer.connect().then(success => {
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