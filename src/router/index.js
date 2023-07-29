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
            component: () => import('@/pages/hospital/index.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    //滚动行为，控制滚动条的位置
    scrollBehavior(){
        return {
            left:0,
            top:0
        }
    }
})