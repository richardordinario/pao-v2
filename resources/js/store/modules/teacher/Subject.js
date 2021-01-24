import Subject from '../../../apis/modules/teacher/Subject'

const state = {
    subjects: [],
}
const getters = {
    allSubjects: state => state.subjects
}
const actions = {
    async get({ commit }, payload) {
        try {   
            const res = await Subject.allSubjects(payload)
            commit('ALL_SUBJECTS', res.data)
        } catch (error) {
            console.log(error)
        }
    },
    async add({ commit }, payload) {
        try {   
            const res = await Subject.addSubject(payload)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    },
    
}
const mutations = {
    ALL_SUBJECTS(state, payload) {
        state.subjects = payload
    },
    SET_CURRENT_PAGE(state, payload) {
        state.subjects.current_page = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}