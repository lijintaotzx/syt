<template>
    <el-card>
        <template #header>
            <div>
                <span>实名信息</span>
            </div>
        </template>
        <div class="content">
            <div class="top">
                <svg t="1695967194485" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2377" width="16" height="16">
                    <path d="M512 958.016611c-245.919634 0-446.016611-200.064292-446.016611-446.016611 0-245.919634 200.095256-446.016611 446.016611-446.016611 245.952318 0 446.016611 200.064292 446.016611 446.016611S757.952318 958.016611 512 958.016611zM512 129.983389c-210.655557 0-382.016611 171.359333-382.016611 382.016611 0 210.624593 171.359333 382.016611 382.016611 382.016611 210.624593 0 382.016611-171.359333 382.016611-382.016611S722.624593 129.983389 512 129.983389z"
                          fill="#d81e06" p-id="2378"></path>
                    <path d="M463.99957 304.00043c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043-21.490445-48.00043-48.00043-48.00043S463.99957 277.490445 463.99957 304.00043z"
                          fill="#d81e06" p-id="2379"></path>
                    <path d="M512 768c-17.664722 0-32.00086-14.303454-32.00086-32.00086L479.99914 448c0-17.664722 14.336138-32.00086 32.00086-32.00086s32.00086 14.336138 32.00086 32.00086l0 287.99914C544.00086 753.696546 529.664722 768 512 768z"
                          fill="#d81e06" p-id="2380"></path>
                </svg>
                <span>完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前进行实名认证！</span>
            </div>
            <user-check-info v-if="userStore.userDetail?.authStatus===1" :userInfo="userStore.userDetail"/>
            <user-checking v-else/>
        </div>

    </el-card>
</template>

<script setup>


import UserChecking from "@/pages/member/UserChecking.vue";
import UserCheckInfo from "@/pages/member/UserCheckInfo.vue";
import {onMounted} from "vue";
import {getUserInfo} from "@/api/hospital/index.js";
import useUserStore from "@/store/modules/user.js";

let userStore = useUserStore()

// onMounted(async () => {
//     await userStore.getUserDetail()
//     console.log(2222, userStore.userDetail.authStatus)
// })
// const reqUserInfo = async () => {
//     let result = await getUserInfo()
//     console.log(result)
//     if (result.code === 200) {
//         return result.data
//     } else {
//
//     }
// }

</script>

<style scoped lang="scss">
.content {
  .top {
    color: #ccc;
    font-size: 14px;
    margin: 20px 35px;

    span {
      margin-left: 5px;
    }
  }
}
</style>