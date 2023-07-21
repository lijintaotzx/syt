import { createApp } from 'vue'
import HospitalTop from "./components/hospital_top/index.vue";
import HospitalBottom from "./components/hospital_bottom/index.vue";
import App from './App.vue'

const app = createApp(App)

app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

app.mount('#app')
