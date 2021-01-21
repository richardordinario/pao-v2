<template>
    <section>
        <v-row class="justify-content-left">
            <v-col cols="6" md="3" v-for="(item, i) in progress" :key="i">
                <v-card class="success">
                    <v-card-text>
                        <div class="text-center white--text"
                        :class="$vuetify.breakpoint.md ? 'text-h6' : 'text-h3'">
                        {{ item.count }}</div>
                        <div class="text-caption text-center white--text"
                        >{{ item.title }}</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="justify-content-left mt-3">
            <v-col cols="12" xl="12">
                <v-card class="success">
                    <v-card-title class="white--text">Monthly Enrollees</v-card-title>
                    <v-card-text>
                        <Sparkline/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="6" xl="6">
                <v-card>
                    <v-card-text>
                        <v-data-table
                        :headers="headers"
                        :items="students"
                        :items-per-page="5"
                        ></v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import Sparkline from '../layouts/dashboard/Sparkline'
export default {
    components: { Sparkline },
    data: () => ({
        progress: [
            {
                title: 'Active Courses',
                count: 101
            },
            {
                title: 'Draft Courses',
                count: 1
            },
            {
                title: 'Total Students',
                count: 10902
            },
            {
                title: 'Uploaded Courses',
                count: 1012
            },
        ],
        studentList: [
            {
                title: 'Joined this week',
                count: 120
            },
            {
                title: 'Completed their courses',
                count: 111
            },
            {
                title: 'Active user',
                count: 1200
            },
        ],
        headers: [
            {
                text: 'STUDENT NAME',
                align: 'start',
                value: 'name'
            },
            {
                text: 'COURSE TITLE',
                value: 'course'
            },
        ],
        students: [
            {
                name: 'John Bonador',
                course: 'Philippine Cornea  Society'
            },
            {
                name: 'Juan Dela Cruz',
                course: 'Philippine Cornea  Society'
            },
        ],

    }),

}
</script>
