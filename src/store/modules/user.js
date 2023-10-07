import {defineStore} from "pinia";
import {getSmsCode, getUserInfo, userLogin} from "@/api/hospital/index.js";
import {GET_TOKEN, SET_TOKEN} from "@/utils/user.js";

const useUserStore = defineStore('User', {
        state: () => {
            return {
                visible: false,
                code: null,
                userInfo: GET_TOKEN(),
                userDetail: null,
            }
        },
        actions: {
            showLogin() {
                this.visible = true
            },
            hideLogin() {
                this.visible = false
            },
            async getCode(PhNum) {
                let res = await getSmsCode(PhNum)
                if (res.code === 200) {
                    this.code = res.data
                    return 'ok'
                } else {
                    return Promise.reject(new Error(res.message));
                }
            },
            async getUserDetail() {
                let res = await getUserInfo()
                if (res.code === 200) {
                    this.userDetail = res.data
                } else {
                    return Promise.reject(new Error(res.message));
                }
            },
            async userLogin(data) {
                let result = await userLogin(data)
                console.log(result)
                if (result.code === 200) {
                    this.userInfo = result.data
                    SET_TOKEN(result.data)
                    await this.getUserDetail()
                    return 'ok'
                } else {
                    return Promise.reject(new Error(result.message))
                }
            },
            logout() {

            }
        },
        getters: {},
    }
);

export default useUserStore;