<template>
    <section>
        <div class="d-flex flex-column justify-center align-center mt-10">
            <v-avatar :size="mini ? '62' : '92'" class="avatar">
                <img src="/assets/images/avatar/avatar1.png" alt="John">
            </v-avatar>
            <p class="text-subtitle-1 mb-0 pb-0">John Cruz</p>
            <span class="font-weight-light text-caption mt-0 pt-0">MD</span>
        </div>

        <div class="text-center mt-5 mb-0 pb-0">
            <v-btn 
            @click.stop="dialog = true"
            color="#4B9E56" 
            class="white--text btn-normal text-center" 
            rounded>
                <v-icon small>mdi-plus</v-icon>
                <span v-if="!mini" >Add Course</span>
            </v-btn>
        </div>
        <v-list dense rounded>
            <div v-for="nav in navs" :key="nav.id">
                <v-subheader>{{nav.header}}</v-subheader>
                <router-link v-for="(list, i) in nav.list" :key="i" :to="list.route">
                    <v-list-item :class="$route.name == list.name ? 'grey lighten-4' : ''">
                        <v-list-item-icon>
                            <v-icon color="#545454" :class="!mini ? 'nav__list-icon' : ''">{{list.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="nav__list">
                                {{list.title}}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </div>
        </v-list>
        <v-dialog v-model="dialog" max-width="500">
            <SubjectDialog/>
        </v-dialog>
    </section>
</template>

<script>
    import SubjectDialog from '../subjects/AddSubject'
    import Navs from '../../../../apis/navigations/Teacher'
    export default {
        props: {
            mini: Boolean
        },
        components: { SubjectDialog },
        data() {
            return {
                navs: Navs,
                dialog: false
            }
        },
    }
</script>