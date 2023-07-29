<template>
    <div class="top">
        <div class="content">
            <div class="left" @click="clickIndex">
                <img src="../../assets/images/logo.png" alt="">
                <p>尚医通 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login">登录/注册</p>
            </div>
        </div>
    </div>

</template>

<script setup>
import {useRouter} from 'vue-router'

let $router = useRouter()
const clickIndex = () => {
    $router.push({
        'path': '/'
    })
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