<template>
    <section>
        <v-form @submit.prevent="AddSubject">
        <v-card>
            <v-card-title>
                Add Subject
            </v-card-title>
            <v-card-text class="mt-5">
                <v-text-field 
                dense
                v-model="form.subject_name"
                label="Subject Name" 
                outlined></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn>Save</v-btn>
            </v-card-actions>
        </v-card>
         </v-form>
    </section>
</template>

<script>
export default {
    props: {
        dialog: Boolean
    },
    data: () => ({
        form: {
            subject_name: ''
        }
    }),
    methods: {
        AddSubject() {
            this.$store.dispatch('teacherSubject/add', this.form)
            console.log(this.form.subject_name)
        }
    }
}
</script>

<style>

</style>