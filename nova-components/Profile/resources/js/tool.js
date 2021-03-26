Nova.booting((Vue, router) => {
    router.addRoutes([
        {
            name: 'profile',
            path: '/profile',
            component: require('./components/Tool'),
            meta: { label: 'Profile' }
        }
    ])
});
