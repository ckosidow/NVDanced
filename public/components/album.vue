<template>
    <div class="container" v-if="album">
        <div class="columns is-mobile">
            <div class="column is-3">
                <figure class="image">
                    <img :src="album.images[1] ? album.images[1].url : ''"/>
                </figure>
            </div>
            <div class="column is-6">
                <h4 class="is-size-4">
                    {{album.name}}
                </h4>
                <p v-for="artist in album.artists">
                    {{artist.name}}
                </p>
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
        </div>
        <div class="columns is-mobile is-multiline">
            <div class="column is-4" v-for="track in tracks">
                <h4 class="is-size-4">
                    {{track.name}}
                </h4>
                <p>
                    Danceability: {{track.danceability.toFixed(2)}}
                </p>
                <p>
                    Tempo: {{track.tempo.toFixed(2)}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
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
            axios.get("/album?album_id=" + this.$route.query.album_id).then((response) => {
                this.album = response.data.album;
                this.tracks = response.data.tracks;
                this.overallDance = response.data.overallDance;
                this.overallPop = response.data.overallPop;
                this.overallTempo = response.data.overallTempo;
            });
        }
    }
</script>