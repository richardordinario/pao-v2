<template>
    <section>
        <v-menu
        bottom
        left
        offset-y
          >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                dark
                fab
                elevation="2"
                small
                v-bind="attrs"
                v-on="on"
                class="mx-2 avatar"
                >
                    <v-img src="/assets/images/avatar/avatar1.png" class="img-fluid" height="40" width="40"></v-img>
                </v-btn>
            </template>

            <v-list>
                <v-list-item>
                    <v-list-item-icon class="mx-0">
                        <v-icon small>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>My Profile</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="logout">
                    <v-list-item-icon class="mx-0">
                        <v-icon small>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
          </v-menu>
    </section>
</template>

<script>
import Auth from '../../../../apis/modules/Auth'
    export default {
        data:() => ({
            drawer: false,
        }),
        methods: {
            logout() {
                Auth.logout().then(res => {
                    location.href= '/'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
