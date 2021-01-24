<template>
    <section>
        <v-card flat class="mb-10">
            <v-card-text>
                <v-row class="justify-content-left">
                    <v-col v-for="subject in subjects" :key="subject.id" cols="12" sm="6" md="4" lg="3" xl="3">
                        <v-card>
                            <v-img
                            height="200px"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            >
                            </v-img>
                            <v-card-title class="text-subtitle-1">{{ subject.subject_name }}</v-card-title>
                            <v-card-subtitle>Theresa Gladiola B. Merca, MD</v-card-subtitle>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn class="success white--text ">Details</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </section>
</template>

<script>
    export default {
        props: { 
            subjects: Array
        },
        data:() => ({
            drawer: false,
        }),

    }
</script>

<style lang="scss" scoped>

</style>
