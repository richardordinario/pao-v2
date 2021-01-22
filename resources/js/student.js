require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VueRouter from 'vue-router'
import '../sass/template/teacher/teacher.scss'
import routes from './components/student/routes'
import Student from './components/student/App.vue'
import store from './store'

Vue.use(Vuetify)
Vue.use(VueRouter)

const opts = {}

const router = new VueRouter({
    hashbang: false,
    mode: 'history',
    base: '/student/',
    routes
})

new Vue({
    store,
    router,
    vuetify: new Vuetify(opts),
    'el': '#app',
    render: h => h(Student),
})


