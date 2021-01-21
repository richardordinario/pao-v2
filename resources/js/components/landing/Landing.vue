<template>
    <v-app>
        <v-app-bar color="green" height="50" elevation="0" class="mb-16"></v-app-bar>
        <v-container fill-height>
            <v-layout justify-center>
                <v-flex xs12 sm12 md10 lg10>
                    <v-app-bar color="transparent" elevation="0">
                        <v-toolbar-title>
                            <v-img src="assets/images/landing/logo.png" ></v-img>
                        </v-toolbar-title>
                        <v-toolbar-items class="px-10">
                            <v-btn text>Home</v-btn>
                            <v-btn text>Executive Council and CCEO</v-btn>
                            <v-btn text>Scientific Program</v-btn>
                            <v-btn text>Faqs</v-btn>
                        </v-toolbar-items>
                        <v-spacer></v-spacer>
                        <a :href="redirect.href">
                            <v-btn
                            large
                            width="150"
                            class="white--text"
                            color="green"
                            v-text="redirect.text"></v-btn>
                        </a>
                    </v-app-bar>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            redirect: {
                'text': 'Login', 'href': '/login'
            },
        }),
        mounted() {
            this.guard = GUARD.user
            if(this.guard) {
                switch (GUARD.role) {
                    case 'teacher':
                        this.redirect.text = this.guard.name
                        this.redirect.href = '/' + GUARD.role
                        break;

                    default:
                        break;
                }
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>
