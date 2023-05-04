import Vue from 'vue'
import VueRoute from 'vue-router'
import Layout from '@/components/Layout'

Vue.use(VueRoute)

const router = new VueRoute({
    mode: 'history',
    // base: 'dxsexpo-web',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            name: 'layout',
            redirect: '/home',
            component: Layout,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('@/views/home')
                },
                {
                    path: 'about',
                    name: 'about',
                    component: () => import('@/views/about')
                },
                {
                    path: 'exhibition-plan',
                    name: 'exhibitionPlan',
                    component: () => import('@/views/exhibition-plan')
                },
                {
                    path: 'exhibition-scene',
                    name: 'exhibitionScene',
                    component: () => import('@/views/exhibition-scene')
                },
                {
                    path: 'exhibition-guide',
                    name: 'exhibitionGuide',
                    component: () => import('@/views/exhibition-guide')
                },
                {
                    path: 'contact-us',
                    name: 'contactUs',
                    component: () => import('@/views/contact-us')
                },
                {
                    path: 'join-us',
                    name: 'joinUs',
                    component: () => import('@/views/join-us')
                },
                {
                    path: 'news',
                    name: 'news',
                    component: () => import('@/views/news')
                }
            ]
        }
    ]
})

export default router