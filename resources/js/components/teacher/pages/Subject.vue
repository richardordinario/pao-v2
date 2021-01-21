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
                            <AllCourses v-if="item ==='All'"/>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    import AllCourses from '../layouts/cards/Card.vue'

    export default {
        data () {
            return {
                tabs: null,
                items: [
                'All', 'Publish', 'For Approval', 'Drafts',
                ],
            }
        },
        components: { AllCourses }
    }
</script>

<style lang="scss" scoped>

</style>
