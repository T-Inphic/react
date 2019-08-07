const Home = () => import('../pages/home');

const config = [
    {
        path: '/home',
        title: '首页',
        name: 'home',
        component: Home,
        children: [
            
        ]
    },
    {
        path: '*',
        title: '首页',
        name: 'home',
        component: Home
    }
]

export default config;