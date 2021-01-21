<template>
    <section>
        <v-btn text plain @click="logout">Logout</v-btn>
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
