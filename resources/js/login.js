require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Login from './components/auth/pages/Login.vue'
import '../sass/landing.scss'
import store from './store'

Vue.use(Vuetify)
const opts = {}

new Vue({
    store,
    vuetify: new Vuetify(opts),
    'el': '#app',
    render: h => h(Login),
})


