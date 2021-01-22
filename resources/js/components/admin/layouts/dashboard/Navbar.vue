<template>
    <section>
        <v-btn class="btn-normal" text plain @click="logout">Logout</v-btn>
    </section>
</template>

<script>
    export default {
        data:() => ({
            drawer: false,
            role: GUARD.role
        }),
        methods: {
            logout() {
                this.$store.dispatch('auth/logout', this.role).then(() => {
                    location.href= '/'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
