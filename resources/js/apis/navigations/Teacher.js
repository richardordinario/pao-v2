export default  [
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
                title: 'Course Manager',
                icon: 'mdi-book',
                name: 'Courses',
                route: '/courses'
            },
            // {
            //     title: 'My Students',
            //     icon: 'mdi-school',
            //     route: '/students'
            // },
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
                title: 'My Profile',
                icon: 'mdi-account',
                route: 'Dashboard'
            },
        ]
    }
]