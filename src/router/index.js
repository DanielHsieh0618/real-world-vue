import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
// import Settings from '../views/Settings.vue'
// import CreateArticle from '../views/CreateArticle.vue'
// import EditArticle from '../views/EditArticle.vue'
// import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tag',
        redirect: {
            name: 'Home'
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import("@/views/Settings.vue")
    },
    {
        path: '/editor',
        name: 'Editor',
        component: () => import("@/views/Editor.vue")
    },
    {
        path: '/article',
        name: 'Article',
        component: () => import("@/views/Article.vue")
    }
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router