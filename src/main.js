import {createApp} from 'vue'
import HospitalTop from "./components/HospitalTop/index.vue";
import HospitalBottom from "./components/HospitalBottom/index.vue";
import Login from "@/components/Login.vue";

import router from "@/router";
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
import '@/style/reset.scss'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import pinia from '@/store'
import './permission.js'

app.use(ElementPlus, {
    locale: zhCn,
})


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.component('Login', Login)


app.use(router);
app.use(pinia);

app.mount('#app')
