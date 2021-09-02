<template>
    <div class="container pt-5" v-if="playlist">
        <div class="columns is-mobile">
            <div class="column is-3">
                <figure class="image">
                    <img class="is-96x96"
                         :src="playlist.images[1] ? playlist.images[1].url : playlist.images[0].url"/>
                </figure>
            </div>
            <div class="column is-6">
                <h1 class="is-size-1">
                    {{playlist.name}}
                </h1>
                <p>
                    <router-link :to="{path: '/other?user_id=' + playlist.owner.id}">
                        {{playlist.owner.display_name}}
                    </router-link>
                </p>
                <p>
                    Danceability: {{overallDance}}
                </p>
                <p>
                    Popularity: {{overallPop}}
                </p>
                <p>
                    Tempo: {{overallTempo}}
                </p>
            </div>
            <div class="column is-3">
                <button v-on:click="sortByDanceability">Danceability</button>
                <button v-on:click="sortByPopularity">Popularity</button>
                <button v-on:click="sortByBest">Best</button>
            </div>
        </div>
        <div class="columns is-mobile is-multiline">
            <div class="column is-4-desktop is-6-tablet is-12-mobile" v-for="track in playlist.tracks.items">
                <div class="columns is-mobile">
                    <div class="column is-4 is-flex is-justify-content-center">
                        <figure class="image is-96x96">
                            <img :src="track.track.album.images[2] ? track.track.album.images[2].url : ''"/>
                        </figure>
                    </div>
                    <div class="column is-8">
                        <h5 class="is-size-5">
                            {{track.track.name}}
                        </h5>
                        <h6 class="is-size-6">
                            {{track.track.album.name}}
                        </h6>
                        <h6 class="is-size-6">
                            <span v-for="(artist, i) in track.track.artists">
                                {{artist.name}}<span v-if="i != track.track.artists.length - 1">, </span>
                            </span>
                        </h6>
                        <p>
                            Danceability: {{track.track.danceability}}
                        </p>
                        <p>
                            Popularity: {{track.track.popularity}}
                        </p>
                        <p>
                            Tempo: {{track.track.tempo}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        props: ['playlist_id', 'user_id'],
        data() {
            return {
                playlist: null,
                overallPop: null,
                overallTempo: null,
                overallDance: null
            }
        },
        mounted() {
            axios.get("/playlist?user_id=" + this.$route.query.user_id + "&playlist_id=" + this.$route.query.playlist_id).then((response) => {
                this.playlist = response.data.playlist;
                this.overallDance = response.data.overallDance;
                this.overallPop = response.data.overallPop;
                this.overallTempo = response.data.overallTempo;
            });
        },
        methods: {
            sortByDanceability() {
                this.playlist.tracks.items = this.playlist.tracks.items.sort((a, b) => {
                    return b.track.danceability - a.track.danceability;
                });
            },
            sortByPopularity() {
                this.playlist.tracks.items = this.playlist.tracks.items.sort((a, b) => {
                    return b.track.popularity - a.track.popularity;
                });
            },
            sortByBest() {
                this.playlist.tracks.items = this.playlist.tracks.items.sort((a, b) => {
                    return (b.track.popularity + b.track.danceability) - (a.track.popularity + a.track.danceability);
                });
            }
        },
        watch:{
            $route (to, from){
            }
        }
    }
</script>