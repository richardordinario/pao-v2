import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './modules/Auth'

export default new Vuex.Store({
    modules: {
        auth
    }
})