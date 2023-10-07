<template>
    <div class="container">
        <HospitalTop/>
        <div class="content">
            <router-view></router-view>
        </div>
        <HospitalBottom/>
        <login v-if="userStore.visible"/>
    </div>
</template>

<script setup>
import MyTest from "@/components/MyTest.vue";
import useUserStore from "@/store/modules/user.js";

let userStore = useUserStore();


// export default {
//     name: "App",
//     components: {MyTest},
//     setup() {
//     }
// }
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }

}

</style>