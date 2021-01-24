<template>
    <v-pagination
    v-model="currentPage"
    :length="lastPage"
    :total-visible="8"
    class="my-5"
    ></v-pagination>
</template>

<script>
export default {    
    props: [ 
        'store',
        'collection'
    ],
    watch: {
        currentPage(newVal, oldVal) {
            this.paginatePage(newVal)
        }
    },
    computed: {
         currentPage: {
            get() {
                return this.$store.state[this.store][this.collection].current_page
            },
            set(value) {
                this.$store.commit(this.store+'/SET_CURRENT_PAGE', value)
            }
        },
        lastPage: {
            get() {
                return this.$store.state[this.store][this.collection].last_page
            }
        }
    },
    methods: {
        paginatePage(pageNumber) {
            this.$store.dispatch(this.store+'/get', pageNumber)
        }
    }
}
</script>

<style>

</style>