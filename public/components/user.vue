<template>
    <div class="container pt-5" v-if="user">
        <div class="columns is-mobile">
            <div class="column is-3">
                <img :src="user.images[0].url"/>
            </div>
            <div class="column is-9">
                <h3 class="is-size-3">
                    {{user.display_name}}
                </h3>
            </div>
        </div>

        <!--div.pure-g-->
        <!--div.pure-u-1.pure-u-sm-3-5.pure-u-md-1-2.pure-u-lg-1-3-->
        <!--img(src=user.images[0] ? user.images[0].url : '')-->
        <!--div.pure-u-1.pure-u-sm-2-5.pure-u-md-1-2.pure-u-lg-2-3-->
        <!--h1 !{user.display_name}-->

        <!--div.pure-g-->
        <!--each playlist in playlists-->
        <!--div.pure-u-1-2.pure-u-sm-1-3.pure-u-md-1-4.pure-u-lg-1-5.user-playlist-->
        <!--h4 !{playlist.name}-->
        <!--p-->
        <!--a(href="/other?user_id=#{playlist.owner.id}") !{playlist.owner.display_name}-->
        <!--div-->
        <!--a(href="/playlist?user_id=#{playlist.owner.id}&playlist_id=#{playlist.id}")-->
        <!--img(src=playlist.images[0] ? playlist.images[0].url : '', width="100%")-->
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                message: 'You are logged in',
                user: null
            }
        },
        mounted() {
            axios.get("/me").then((response) => {
                this.user = response.data.user;
            });
        },
        methods: {

        }
    }
</script>