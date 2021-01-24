<template>
    <section>
        <v-row class="justify-centent-center">
            <v-col cols="12" md="12">
                 <v-card>
                    <v-toolbar flat>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>

                        <template v-slot:extension>
                            <v-tabs
                            v-model="tabs"
                            fixed-tabs
                            >
                            <v-tabs-slider color="green"></v-tabs-slider>
                                <v-tab
                                class="grey--text text--darken-1"
                                v-for="item in items" :key="item"
                                >
                                    {{item}}
                                </v-tab>
                            </v-tabs>
                        </template>
                    </v-toolbar>

                    <v-tabs-items v-model="tabs" class="ma-10">
                        <v-tab-item
                        v-for="item in items"
                        :key="item"
                        >
                            <AllSubjects :subjects="subjects.data" v-if="item ==='All'"/>
                            <Pagination store="teacherSubject" collection="subjects"/>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    import AllSubjects from '../components/subjects/AllSubjects'
    import Pagination from '../components/helper/Pagination'
    import { mapState, mapGetters } from 'vuex'
    export default {
        data () {
            return {
                tabs: null,
                items: [ 'All', 'Publish', 'For Approval', 'Drafts'],
            }
        },
        components: { AllSubjects, Pagination },
        computed: {
            ...mapState('teacherSubject', [
                'subjects'
            ]),
        },
        mounted() {
            this.$store.dispatch('teacherSubject/get', 0)
        },
      
        
        
        
    }
</script>

<style lang="scss" scoped>

</style>
