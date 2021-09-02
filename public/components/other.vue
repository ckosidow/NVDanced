<template>
    <div class="container pt-5" v-if="user">
        <div class="columns is-mobile">
            <div class="column is-3">
                <figure class="image">
                    <img class="is-96x96" :src="user.images[0] ? user.images[0].url : ''"/>
                </figure>
            </div>
            <div class="column is-9">
                <h3 class="is-size-3">
                    {{user.display_name}}
                </h3>
            </div>
        </div>
        <div class="columns is-mobile is-multiline">
            <div v-for="playlist in playlists.items" class="column is-4-desktop is-6-tablet is-12-mobile">
                <div class="columns is-mobile">
                    <div class="column is-3">
                        <router-link
                                :to="{path: '/playlist?user_id=' + playlist.owner.id + '&playlist_id=' + playlist.id}">
                            <figure class="image">
                                <img class="is-96x96" :src="playlist.images[0] ? playlist.images[0].url : ''"/>
                            </figure>
                        </router-link>
                    </div>
                    <div class="column is-9">
                        <router-link
                                :to="{path: '/playlist?user_id=' + playlist.owner.id + '&playlist_id=' + playlist.id}">
                            <h4 class="is-size-4">
                                {{playlist.name}}
                            </h4>
                        </router-link>
                        <p>
                            <router-link :to="{path: '/other?user_id=' + playlist.owner.id}">
                                {{playlist.owner.display_name}}
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        props: ['user_id'],
        data() {
            return {
                user: null,
                playlists: null
            }
        },
        mounted() {
            this.updatePage();
        },
        methods: {
            updatePage() {
                axios.get("/other?user_id=" + this.$route.query.user_id).then((response) => {
                    this.user = response.data.user;
                    this.playlists = response.data.playlists;
                });
            }
        },
        watch:{
            $route (to, from){
                this.updatePage();
            }
        }
    }
</script>