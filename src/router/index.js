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
                {
                    path: 'reservation',
                    component: () => import('@/pages/hospital/Reservation.vue')
                },
                {
                    path: 'reservation_confirm',
                    component: () => import('@/pages/hospital/ReservationConfirm.vue')
                },
            ]
        },
        {
            path: '/member',
            component: () => import('@/pages/member/index.vue'),
            children: [
                {
                    path: 'authentication',
                    component: () => import('@/pages/member/Authentication.vue')
                },
                {
                    path: 'order',
                    component: () => import('@/pages/member/Order.vue')
                },
                {
                    path: 'users',
                    component: () => import('@/pages/member/Users.vue')
                },
                {
                    path: 'information',
                    component: () => import('@/pages/member/Information.vue')
                },
                {
                    path: 'feedback',
                    component: () => import('@/pages/member/Feedback.vue')
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