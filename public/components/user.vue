<template>
    <div class="container p-5" v-if="user">
        <div class="columns is-mobile">
            <div class="column is-3" v-if="user.images.length">
                <figure class="image">
                    <img class="is-96x96" :src="user.images[0].url"/>
                </figure>
            </div>
            <div class="column is-9">
                <h3 class="is-size-3">
                    {{user.display_name}}
                </h3>
            </div>
        </div>
        <div class="columns is-mobile is-multiline" v-if="playlists">
            <div v-for="playlist in playlists.items" class="column is-2-desktop is-3-tablet is-4-mobile">
                <router-link
                        :to="{path: '/playlist?user_id=' + playlist.owner.id + '&playlist_id=' + playlist.id}">
                    <figure class="image">
                        <img class="is-256x256" :src="playlist.images[0].url"/>
                    </figure>
                </router-link>
                <router-link
                        :to="{path: '/playlist?user_id=' + playlist.owner.id + '&playlist_id=' + playlist.id}">
                    <h4 class="is-size-4 has-text-white">
                        {{playlist.name}}
                    </h4>
                </router-link>
                <router-link class="has-text-white" :to="{path: '/other?user_id=' + playlist.owner.id}">
                    <p>
                        {{playlist.owner.display_name}}
                    </p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                user: null,
                playlists: null
            }
        },
        mounted() {
            axios.get("/me").then((response) => {
                this.user = response.data.user;
                this.playlists = response.data.playlists;
            });
        },
        methods: {}
    }
</script>