require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Landing from './components/landing/Landing.vue'
import '../sass/landing.scss'
Vue.use(Vuetify)

const opts = {

}

new Vue({
    vuetify: new Vuetify(opts),
    'el': '#app',
    render: h => h(Landing),
})


