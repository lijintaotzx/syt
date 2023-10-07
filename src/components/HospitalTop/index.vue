<template>
    <div class="top">
        <div class="content">
            <div class="left" @click="clickIndex">
                <img src="../../assets/images/logo.png" alt="">
                <p>尚医通 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login" @click="loginClick" v-if="!loginStore.userInfo.name">登录/注册</p>
                <el-dropdown v-else>
                  <span class="el-dropdown-link">
                    {{ loginStore.userInfo.name }}
                    <el-icon class="el-icon--right">
                      <arrow-down/>
                    </el-icon>
                  </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="$router.push('/member/authentication')">
                                实名认证
                            </el-dropdown-item>
                            <el-dropdown-item @click="$router.push('/member/orders')">挂号订单</el-dropdown-item>
                            <el-dropdown-item>就诊人管理</el-dropdown-item>
                            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>

</template>

<script setup>
import {useRouter} from 'vue-router'
import useUserStore from "@/store/modules/user.js";
import {ArrowDown} from '@element-plus/icons-vue'
import {REMOVE_TOKEN} from "@/utils/user.js";

let $router = useRouter()
const clickIndex = () => {
    $router.push({
        'path': '/'
    })
}
let loginStore = useUserStore()

const logout = () => {
    loginStore.userInfo = {}
    REMOVE_TOKEN()
    $router.push({
        'path': '/'
    })
}

const loginClick = () => {
    loginStore.showLogin()
}

</script>

<style lang="scss" scoped>
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 70px;
    background: white;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
      }

      p {
        font-size: 22px;
        color: #55a6fe;
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #bbb;

      .help {
        margin-right: 10px;
      }
    }
  }
}


</style>