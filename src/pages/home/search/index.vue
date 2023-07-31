<template>
    <div class="search">
        <el-autocomplete
                v-model="searchName"
                clearable
                :fetch-suggestions="inputChange"
                class="inline-input w-50"
                placeholder="请输入医院名称"
                :trigger-on-focus="false"
                @select="goDetail"
        />
        <el-button type="primary" :icon="Search">搜索</el-button>
    </div>

</template>

<script setup>
import {reqHospitalsByName} from '@/api/home/index.js'
import {ref, computed} from 'vue'
import {useRouter} from 'vue-router'

let searchName = ref('')
let $router = useRouter()


const inputChange = async (value, cb) => {
    const searchRes = await reqHospitalsByName(value)
    console.log(searchRes.data)
    let cbData = searchRes.data.map(item => {
        return {
            value: item.hosname,
            hoscode: item.hoscode
        }
    })
    cb(cbData)
}
const goDetail = (item) => {
    $router.push({path: "/hospital/register", query: {hoscode: item.hoscode}})
}


</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>