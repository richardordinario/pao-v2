import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

export default [
    {
        path: '/',
        name: Login,
        component: Login
    },
    {
        path: '/register',
        name: Register,
        component: Register
    },
]
