<template>
    <div>
        <div class="columns">
            Hello
        </div>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                message: 'You are logged in'
            }
        },
        mounted() {
            const user = axios.get("/me");


        },
        methods: {

        }
    }
</script>