require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VueRouter from 'vue-router'
import '../sass/template/teacher/teacher.scss'
import routes from './components/teacher/routes'
import Teacher from './components/teacher/App.vue'
Vue.use(Vuetify)
Vue.use(VueRouter)

const opts = {}

const router = new VueRouter({
    hashbang: false,
    base: '/teacher/',
    routes
})

Vue.component('teacher-component', require('./components/teacher/App.vue').default);

new Vue({
    router,
    vuetify: new Vuetify(opts),
    'el': '#app',
    render: h => h(Teacher),
})


