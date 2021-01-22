import Dashboard from '../pages/Dashboard.vue'
import Subject from '../pages/Subject.vue'
import Student from '../pages/Student.vue'
import NotFound from '../../../components/NotFound.vue'

export default [
    {   path: '/404', 
        component: NotFound 
    },
    {   
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/home',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/courses',
        name: 'Courses',
        component: Subject
    },
    {
        path: '/students',
        name: 'Students',
        component: Student
    },
    {   
        path: '*', 
        redirect: '/404' 
    },

]
