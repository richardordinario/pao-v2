require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import VueRouter from 'vue-router'
// import routes from './components/auth/router'
import Login from './components/auth/pages/Login.vue'
import '../sass/landing.scss'

// Vue.use(VueRouter)
Vue.use(Vuetify)
const opts = {}

// const router = new VueRouter({
//     hashbang: false,
//     routes
// })

new Vue({
    // router,
    vuetify: new Vuetify(opts),
    'el': '#app',
    render: h => h(Login),
})


