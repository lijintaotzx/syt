import router from "@/router/index.js";
// import Nprogress

import pinia from '@/store'
import useUserStore from "@/store/modules/user.js";


let userStore = useUserStore(pinia)
let whiteList = [
    '/home',
    '/hospital/register',
    '/hospital/detail',
    '/hospital/notice',
    '/hospital/close',
    '/hospital/search',
]
router.beforeEach((to, from, next) => {
    console.log(to.path)
    if (router)
        if (userStore.userInfo.token) {
            next()
        } else {
            if (whiteList.includes(to.path)) {
                next()
            } else {
                userStore.showLogin()
            }
        }
})

router.afterEach((to, from) => {

})