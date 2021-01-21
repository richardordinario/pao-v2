require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Login from './components/auth/Login.vue'
import '../sass/landing.scss'

Vue.use(Vuetify)

const opts = {

}

new Vue({
    vuetify: new Vuetify(opts),
    'el': '#app',
    render: h => h(Login),
})


