<template>
    <v-overlay :value="$route.name == '404' ? 'true' : 'false'">
        <v-card elevation="0" color="transparent">
            <v-card-text>
                <div class="text-h1 mx-0">404
                    <span class="text-caption">Not found .....</span>
                    <a href="/" class="text-subtitle-2">Redirect Home</a>
                    </div>
            </v-card-text>
        </v-card>
    </v-overlay>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>
