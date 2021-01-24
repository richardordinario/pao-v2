import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './modules/Auth'
import teacherSubject from './modules/teacher/Subject'

export default new Vuex.Store({
    modules: {
        auth,
        teacherSubject
    }
})