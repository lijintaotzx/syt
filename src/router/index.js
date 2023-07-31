import {createRouter, createWebHistory} from 'vue-router'

//createRouter创建路由器实例，管理多个路由

export default createRouter({
    //路由模式
    history: createWebHistory(),
    // 路由管理
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue'),
            children: [
                {
                    path: 'register',
                    component: () => import('@/pages/hospital/Register.vue')
                },
                {
                    path: 'detail',
                    component: () => import('@/pages/hospital/Detail.vue')
                },
                {
                    path: 'notice',
                    component: () => import('@/pages/hospital/Notice.vue')
                },
                {
                    path: 'close',
                    component: () => import('@/pages/hospital/Close.vue')
                },
                {
                    path: 'search',
                    component: () => import('@/pages/hospital/Search.vue')
                },
            ]
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    //滚动行为，控制滚动条的位置
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})