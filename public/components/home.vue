<template>
    <div class="p-5">
        <p>NVDanced is an app that allows you to see stats about your playlists and songs. Among them is danceability.</p>
        <p><small>Copyright (c) 2021 Conor Kosidowski</small></p>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
            }
        },
        mounted() {
            if ($cookies.get('auth')) {
                router.push({ name: 'user' })
            }
        }
    }
</script>