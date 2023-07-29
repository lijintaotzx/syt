<template>
    <div>
        <Carousel/>
        <Search/>
        <el-row gutter="20">
            <el-col :span="20">
                <Level @getLevel="getLevel"/>
                <Region @getRegin="getRegin"/>
                <div class="hospital" v-if="hospitalArr.length>0">
                    <Card class="item" v-for="(item, index) in hospitalArr" :key="index"
                          :hospitalInfo="item"/>
                </div>
                <el-empty v-else description="该地区暂时没有医院🏥"/>
                <el-pagination
                        v-model:current-page="pageNo"
                        v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 30, 40]"
                        :background="true"
                        layout="->, prev, pager, next, jumper, sizes, total"
                        :total="total"
                        @current-change="currentChange"
                        @size-change="sizeChange"
                        style="margin-top: 10px"
                />
            </el-col>
            <el-col :span="4">
                <Tip/>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import Carousel from "@/pages/home/carousel/index.vue";
import Search from "@/pages/home/search/index.vue";
import Level from "@/pages/home/level/index.vue";
import Region from "@/pages/home/region/index.vue";
import Card from "@/pages/home/card/index.vue";
import Tip from "@/pages/home/tip/index.vue"
import {ref, onMounted} from "vue";
import {reqHospital} from "@/api/home/index.js";


let pageNo = ref(1);
let pageSize = ref(8);
let hospitalArr = ref([]);
let total = ref(0);
let hostype = ref('');
let districtCode = ref('');
const getHospitalList = async () => {
    // 获取医院的数据
    let result = await reqHospital(pageNo.value, pageSize.value, hostype.value, districtCode.value);
    if (result.code === 200) {
        hospitalArr.value = result.data.content
        total.value = result.data.totalElements
    }
};
onMounted(() => {
    getHospitalList()
});
const currentChange = () => {
    getHospitalList()
}

function sizeChange() {
    getHospitalList()
}

const getLevel = (level) => {
    if (level === 'all') {
        hostype.value = ''
    } else {
        hostype.value = level
    }
    getHospitalList()
}

const getRegin = (regin) => {
    if (regin === 'all') {
        districtCode.value = ''
    } else {
        districtCode.value = regin
    }
    getHospitalList()
}

</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 48%;
    margin: 10px 0;
  }

}
</style>