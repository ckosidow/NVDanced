<template>
    <div>
        <div id="nvd-img-header"></div>
        <div class="container p-5 mx-0" id="nvd-page-body" v-if="album">
            <div class="columns is-mobile is-multiline">
                <div class="column is-6">
                    <h4 class="is-size-4">
                        {{album.name}}
                    </h4>
                    <p v-for="artist in album.artists" :key="artist">
                        {{artist.name}}
                    </p>
                </div>
                <div class="column is-6">
                    <p>
                        Danceability: {{overallDance}}
                    </p>
                    <p>
                        Tempo: {{overallTempo}}
                    </p>
                    <p>
                        Popularity: {{overallPop}}
                    </p>
                </div>
                <div class="column is-12">
                    <button class="button is-primary" v-on:click="sortByDanceability">Danceability</button>
                </div>
            </div>
            <div class="columns is-mobile is-multiline">
                <div class="column is-4" v-for="track in tracks" :key="track">
                    <h5 class="is-size-6" :title="track.name">
                        <a class="has-text-white" v-on:click="$root.playSong(track.uri)">
                            {{track.name}}
                        </a>
                    </h5>
                    <p>
                        <span class="is-size-7">Danceability: {{track.danceability.toFixed(2)}}</span>
                    </p>
                    <p>
                        <span class="is-size-7">Tempo: {{track.tempo.toFixed(2)}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    let nvdImageHeader;

    export default {
        props: ['album_id'],
        data() {
            return {
                album: null,
                tracks: null,
                overallDance: 0,
                overallPop: 0,
                overallTempo: 0
            }
        },
        mounted() {
            nvdImageHeader = document.getElementById("nvd-img-header");

            this.updatePage();
        },
        methods: {
            updatePage() {
                axios.get("api/album?album_id=" + this.$route.query.album_id).then((response) => {
                    this.album = response.data.album;
                    this.tracks = response.data.tracks;
                    this.overallDance = response.data.overallDance;
                    this.overallPop = response.data.overallPop;
                    this.overallTempo = response.data.overallTempo;

                    if (this.album.images[1]) {
                        nvdImageHeader.style.backgroundImage = 'url(' + this.album.images[1].url + ')';
                    } else if (this.album.images[0]) {
                        nvdImageHeader.style.backgroundImage = 'url(' + this.album.images[0].url + ')';
                    }
                });
            },
            sortByDanceability() {
                this.tracks = this.tracks.sort((a, b) => {
                    return b.danceability - a.danceability;
                });
            },
            resizeHeaderImage() {
                nvdImageHeader.style.backgroundSize = "auto " + (200 + (window.scrollY / 10)) + "%";
            }
        },
        watch:{
            $route (to){
                if (to.name === 'album') {
                    this.updatePage();
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.resizeHeaderImage);
        },
        unmounted() {
            window.removeEventListener('scroll', this.resizeHeaderImage);
        }
    }
</script>