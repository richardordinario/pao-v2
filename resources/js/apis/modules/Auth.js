import Api from '../Api'

export default {
    login(form) {
        return form.role == 'student' ? Api.post('/login', form.form) : Api.post(form.role+'/login', form.form)
    },
    logout(role) {
        return role == 'student' ? Api.post('/logout') : Api.post(role+'/logout')
    }
}
