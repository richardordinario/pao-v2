<template>
    <section>
        <v-row class="justify-content-center">
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
        <v-row class="justify-content-left my-10">
            <v-col cols="12" md="10" lg="8">
                <v-card>
                    <v-card-text>
                        <div class="text-h5 mb-5">Student List</div>
                        <v-row class="justify-content-center">
                            <v-col cols="12" sm="6" md="4" v-for="(list, i) in studentList" :key="i">
                                <v-card elevation="0">
                                    <v-card-text>
                                        <div class="text-subtitle-2 text-center">{{ list.title }}</div>
                                        <div class="text-h3 text-center mt-10">{{ list.count }}</div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-divider class=""></v-divider>
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

export default {

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
        ]
    }),

}
</script>
