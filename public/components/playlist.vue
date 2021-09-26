<template>
    <div>
        <div id="nvd-img-header"></div>
        <div class="container p-5" id="nvd-page-body" v-if="playlist">
            <div class="columns is-mobile is-multiline">
                <div class="column is-6">
                    <h1 class="is-size-1">
                        {{playlist.name}}
                    </h1>
                    <p>
                        <router-link class="has-text-white" :to="{path: '/other?user_id=' + playlist.owner.id}">
                            {{playlist.owner.display_name}}
                        </router-link>
                    </p>
                </div>
                <div class="column is-6">
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
                <div class="column is-12">
                    <button class="button is-primary" v-on:click="sortByDanceability">Danceability</button>
                    <button class="button is-primary" v-on:click="sortByPopularity">Popularity</button>
                    <button class="button is-primary" v-on:click="sortByBest">Best</button>
                </div>
            </div>
            <div class="columns is-mobile is-multiline">
                <div class="column is-4-desktop is-6-tablet is-12-mobile" v-for="track in playlist.tracks.items">
                    <div class="columns is-mobile" v-if="track.track">
                        <div class="column is-4 is-flex is-justify-content-center">
                            <router-link :to="{path: '/album?album_id=' + track.track.album.id}">
                                <figure class="image is-64x64">
                                    <img :src="track.track.album.images[2] ? track.track.album.images[2].url : ''"/>
                                </figure>
                            </router-link>
                        </div>
                        <div class="column is-8">
                            <h5 class="is-size-5">
                                {{track.track.name}}
                            </h5>
                            <h6 class="is-size-6">
                                <router-link class="has-text-white"
                                             :to="{path: '/album?album_id=' + track.track.album.id}">
                                    {{track.track.album.name}}
                                </router-link>
                            </h6>
                            <h6 class="is-size-6">
                            <span v-for="(artist, i) in track.track.artists">
                                {{artist.name}}<span v-if="i != track.track.artists.length - 1">, </span>
                            </span>
                            </h6>
                            <p v-if="track.track.danceability">
                                Danceability: {{track.track.danceability.toFixed(2)}}
                            </p>
                            <p>
                                Popularity: {{track.track.popularity}}
                            </p>
                            <p v-if="track.track.tempo">
                                Tempo: {{track.track.tempo.toFixed(2)}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    let nvdImageHeader;

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
            nvdImageHeader = document.getElementById("nvd-img-header");

            this.updatePage();
        },
        methods: {
            updatePage() {
                axios.get("/playlist?user_id=" + this.$route.query.user_id + "&playlist_id=" + this.$route.query.playlist_id).then((response) => {
                    this.playlist = response.data.playlist;
                    this.overallDance = response.data.overallDance;
                    this.overallPop = response.data.overallPop;
                    this.overallTempo = response.data.overallTempo;

                    if (this.playlist.images[1]) {
                        nvdImageHeader.style.backgroundImage = 'url(' + this.playlist.images[1].url + ')';
                    } else if (this.playlist.images[0]) {
                        nvdImageHeader.style.backgroundImage = 'url(' + this.playlist.images[0].url + ')';
                    }
                });
            },
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
            },
            resizeHeaderImage() {
                nvdImageHeader.style.backgroundSize = "auto " + (200 + (window.scrollY / 10)) + "%";
            }
        },
        watch: {
            $route (to, from){
                this.updatePage();
            }
        },
        created() {
            window.addEventListener('scroll', this.resizeHeaderImage);
        },
        destroyed() {
            window.removeEventListener('scroll', this.resizeHeaderImage);
        }
    }
</script>