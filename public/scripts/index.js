const user = httpVueLoader('../components/user.vue');
const login = httpVueLoader('../components/login.vue');
const home = httpVueLoader('../components/home.vue');
const other = httpVueLoader('../components/other.vue');
const playlist = httpVueLoader('../components/playlist.vue');
const album = httpVueLoader('../components/album.vue');

const routes = [
    { path: '/user', name: 'user', component: user },
    { path: '/home', name: 'home', component: home },
    { path: '/', name: 'home', component: home },
    { path: '/login', name: 'login', component: login },
    { path: '/album', name: 'album', component: album, props: true },
    { path: '/other', name: 'other', component: other, props: true },
    { path: '/playlist', name: 'playlist', component: playlist, props: true }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const thisDeviceName = 'N V Danced';

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
        playingImage: null,
        spotifyPlayer: null,
        currDeviceId: null,
        currDeviceName: null,
        currDeviceType: null
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
            if (this.isPlaying) {
                axios.post("/me/pause").then((response) => {
                    // console.log("Pausing");
                    this.isPlaying = false;
                });
            } else {
                if (!this.currDeviceId) {
                    axios.post("/me/start-player?device_id=" + this.deviceId + "&play=true").then((response) => {
                        // console.log("Switching playback");
                        this.currDeviceId = this.deviceId;
                    });
                }

                axios.post("/me/play-song").then((response) => {
                    // console.log("Playing");
                });

                this.isPlaying = true;
            }
        },
        playNext() {
            if (!this.currDeviceId) {
                axios.post("/me/start-player?device_id=" + this.deviceId).then((response) => {
                    // console.log("Switching playback");
                    this.currDeviceId = this.deviceId;
                });
            }

            axios.post("/me/next").then((response) => {
                // console.log("Playing");
            });

            this.isPlaying = true;
        },
        playSong(uri) {
            if (!this.currDeviceId) {
                axios.post("/me/start-player?device_id=" + this.deviceId).then((response) => {
                    // console.log("Switching playback");
                    this.currDeviceId = this.deviceId;
                    this.currDeviceName = thisDeviceName;
                });
            }

            axios.post("/me/play-song?uri=" + uri).then((response) => {
                // console.log("Playing song");
            });
        },
        useThisDevice() {
            if (this.currDeviceId !== this.deviceId) {
                axios.post("/me/start-player?device_id=" + this.deviceId + "&play=" + this.isPlaying).then((response) => {
                    // console.log("Switching playback");
                    this.currDeviceId = this.deviceId;
                    this.currDeviceName = thisDeviceName;
                    this.currDeviceType = 'Computer';
                });
            }
        },
        checkPlayback() {
            axios.get("/me/get-playback").then((response) => {
                if (response.data) {
                    const currPlaying = response.data;

                    if (currPlaying.is_playing) {
                        this.isPlaying = currPlaying.is_playing;

                        if (currPlaying.item) {
                            this.playingName = currPlaying.item.name;
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
            this.spotifyPlayer = new Spotify.Player({
                name: thisDeviceName,
                getOAuthToken: cb => {
                    cb($cookies.get('auth'));
                },
                volume : 0.5
            });

            // Ready
            this.spotifyPlayer.addListener('ready', ({ device_id }) => {
                this.deviceId = device_id;

                // console.log('Ready with Device ID', device_id);
            });

            // Not Ready
            this.spotifyPlayer.addListener('not_ready', ({ device_id }) => {
                this.deviceId = device_id;
                // console.log('Device ID has gone offline', device_id);
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

            const playbackListener = (arg) => {
                if (arg) {
                    const {
                        position,
                        duration,
                        track_window: {current_track}
                    } = arg;

                    if (current_track) {
                        this.playingImage = null;

                        if (current_track.album) {
                            if (current_track.album.images) {
                                this.playingImage = current_track.album.images[0].url;
                            }
                        }

                        this.playingName = current_track.name;
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
    destroyed() {
        window.removeEventListener('click', this.clearSuggestions);
    }
});