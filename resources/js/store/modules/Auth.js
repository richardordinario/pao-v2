import Auth from '../../apis/modules/Auth'

const state = {}
const getters = {}
const actions = {
    async login({ commit }, payload) {
        try {   
            const res = await Auth.login(payload)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    },
    async logout({ commit }, payload) {
        try {   
            const res = await Auth.logout(payload)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
}
const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}