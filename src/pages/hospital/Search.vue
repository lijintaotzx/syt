<template>
    <div class="close">
        <h1>{{ hospitalDetail.hospitalInfo.hospital?.hosname }}信息查询</h1>
        <el-empty description="暂无信息"/>
    </div>
</template>

<script setup>
import useDetailStore from "@/store/modules/hospitalDetails.js";

let hospitalDetail = useDetailStore()

</script>

<style scoped lang="scss">
.close {
  h1 {
    font-size: 30px;
    text-align: center;
  }
}
</style>