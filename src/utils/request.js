// 二次封装axios，
// 1. 利用axios自带的请求，响应，拦截器功能
// 2. 请求拦截器，一般可以在请求头中携带公共的参数：token等
// 3. 响应拦截器，简化服务器返回的数据，处理http的网络错误
import axios from 'axios'
import {ElMessage} from "element-plus";
import useUserStore from "@/store/modules/user.js";


// 创建axios实例
const request = axios.create(
    {
        baseURL: '/api',
        timeout: 50000, // ms
    }
);

// 请求拦截器
request.interceptors.request.use((config) => {
    // 配置headers中的token
    // config.headers.token =
    // 请求拦截器回调注入的对象，必须返回
    let userStore = useUserStore()
    if (userStore.userInfo.token) {
        config.headers.token = userStore.userInfo.token
    }
    return config
})


request.interceptors.response.use(
    (response) => {
        // 响应拦截器成功的回调
        return response.data;
    },
    (error) => {
        // 响应拦截器失败的回调，处理http错误
        console.log('error', error)
        if (error.name === 'AxiosError') {
            ElMessage({
                type: 'error',
                message: error
            })
        } else {
            let status = error.response.status
            switch (status) {
                case 404: {
                    ElMessage({
                        type: 'error',
                        message: error.message
                    })
                    break;
                }
                case 500: {
                    ElMessage({
                        type: 'error',
                        message: error.message
                    })
                    break;
                }
            }
        }

        return Promise.reject(new Error(error.message));
    });


export default request;