<template>
    <div></div>
    <!--div.pure-g-->
        <!--div.pure-u-1.pure-u-sm-3-5.pure-u-md-1-2.pure-u-lg-1-3-->
            <!-- - if (playlist.images[1]) {-->
            <!--img(src="#{playlist.images[1].url}")-->
            <!-- - } else if (playlist.images[0]) {-->
            <!--img(src="#{playlist.images[0].url}")-->
            <!-- - } else {-->
            <!--img(src="#")-->
            <!-- - }-->
        <!--div.pure-u-1.pure-u-sm-2-5.pure-u-md-1-2.pure-u-lg-2-3-->
            <!--h1 !{playlist.name}-->
            <!--p By:&nbsp;-->
                <!--a(href="/other?user_id=#{playlist.owner.id}") !{playlist.owner.display_name}-->
            <!--p Danceability:&nbsp;-->
                <!--span(class=overallDance >= 80 && 'saucin'-->
                <!--|| overallDance >= 70 && 'caliente'-->
                <!--|| overallDance >= 60 && 'spicy'-->
                <!--|| overallDance >= 50 && 'hot') %!{overallDance}-->
            <!--p Popularity:&nbsp;-->
                <!--span(class=overallPop >= 80 && 'saucin'-->
                <!--|| overallPop >= 70 && 'caliente'-->
                <!--|| overallPop >= 60 && 'spicy'-->
                <!--|| overallPop >= 50 && 'hot') !{overallPop}-->

    <!--div.pure-g-->
        <!--each track in playlist.tracks.items-->
            <!--div.pure-u-1.pure-u-sm-1-3.pure-u-lg-1-4.pure-u-xl-1-5.playlist-song-->
                <!--div.pure-u-2-5-->
                    <!--img(src=track.track.album.images[2] ? track.track.album.images[2].url : '')-->
                <!--div.pure-u-3-5-->
                    <!--h4-->
                        <!--a(href="/song?song_id=#{track.track.id}") !{track.track.name}-->
                    <!--h5-->
                        <!--a(href="/album?album_id=#{track.track.album.id}") !{track.track.album.name}-->
                    <!--p Danceability:&nbsp;-->
                        <!--span(class=track.track.danceability >= 90 && 'saucin'-->
                        <!--|| track.track.danceability >= 80 && 'caliente'-->
                        <!--|| track.track.danceability >= 70 && 'spicy'-->
                        <!--|| track.track.danceability >= 60 && 'hot') !{track.track.danceability}-->
                    <!--p Popularity:&nbsp;-->
                        <!--span(class=track.track.popularity >= 90 && 'saucin'-->
                        <!--|| track.track.popularity >= 80 && 'caliente'-->
                        <!--|| track.track.popularity >= 70 && 'spicy'-->
                        <!--|| track.track.popularity >= 60 && 'hot') !{track.track.popularity}-->
                    <!--p Tempo: !{track.track.tempo}-->
</template>
<script>
    module.exports = {
        props: ['playlist_id', 'user_id'],
        data() {
            return {
                playlist: null,
                overallPop: null,
                overallDance: null
            }
        },
        mounted() {
            axios.get("/playlist?user_id=" + this.$route.query.user_id + "&playlist_id=" + this.$route.query.playlist_id).then((response) => {
                this.playlist = response.data.playlist;
                this.overallDance = response.data.overallDance;
                this.overallPop = response.data.overallPop;
            });
        },
        methods: {}
    }
</script>