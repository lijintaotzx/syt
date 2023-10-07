<template>
    <div class="notice">
        <h1 class="hosname">{{ hosDetail.hospitalInfo.hospital.hosname}}</h1>
        <div class="top"></div>
        <div class="info">
            <div class="tip">
                <div class="text"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useDetailStore from "@/store/modules/hospitalDetails.js";

let hosDetail = useDetailStore()

</script>

<style scoped lang="scss">
.notice {
  .hosname {
    text-align: center;
    font-size: 30px;
  }
}

</style>