export default [
    {
        header: 'MAIN',
        list: [
            {
                title: 'Dashboard',
                icon: 'mdi-view-dashboard',
                name: 'Dashboard',
                route: '/home'
            },
            {
                title: 'Courses',
                icon: 'mdi-book',
                name: 'Courses',
                route: '/courses'
            },
            {
                title: 'Results',
                icon: 'mdi-book',
                name: 'Results',
                route: '/courses'
            },
            {
                title: 'Forum',
                icon: 'mdi-comment-alert',
                route: 'Dashboard'
            },
        ]
    },
    {
        header: 'ACCOUNT',
        list: [
            {
                title: 'Students',
                icon: 'mdi-school',
                route: '/students'
            },
            {
                title: 'Teacher',
                icon: 'mdi-school',
                route: '/students'
            },
        ]
    }
]