import {createApp} from 'vue'
import HospitalTop from "./components/HospitalTop/index.vue";
import HospitalBottom from "./components/HospitalBottom/index.vue";
import router from "@/router";
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
import '@/style/reset.scss'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

app.use(ElementPlus, {
    locale: zhCn,
})
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

app.use(router);

app.mount('#app')
