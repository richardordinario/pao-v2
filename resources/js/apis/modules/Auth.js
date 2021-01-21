import Api from '../Api'

export default {
    login(form) {
        return Api.post('teacher/login', form)
    },
    logout() {
        return Api.post('teacher/logout')
    }
}
