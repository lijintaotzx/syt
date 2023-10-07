<template>
    <div class="confirm">
        <h1 class="tip">确认挂号信息</h1>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>请点击选择就诊人</span>
                    <el-button type="success" :icon="Plus" round>添加就诊人</el-button>
                </div>
            </template>
            <div class="content">
                <user-card v-for="(item, index) in users" :key="index" :data="item" class="user"
                           @click="clickUserCard(index)" :index="index" :user-select="userSelect">
                </user-card>
            </div>
        </el-card>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>挂号信息</span>
                </div>
            </template>
            <el-descriptions
                    class="margin-top"
                    :column="2"
                    border
            >
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            就诊日期
                        </div>
                    </template>
                    {{ dInfo.createTime }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            就诊医院
                        </div>
                    </template>
                    {{ dInfo.param?.hosname }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            就诊科室
                        </div>
                    </template>
                    {{ dInfo.param?.depname }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            医生姓名
                        </div>
                    </template>
                    {{ dInfo.docname }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            医生职称
                        </div>
                    </template>
                    {{ dInfo.title }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            医生专长
                        </div>
                    </template>
                    {{ dInfo.skill }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            医师服务费
                        </div>
                    </template>
                    <span style="color:red">{{ dInfo.amount }}</span>
                </el-descriptions-item>
            </el-descriptions>
        </el-card>
        <el-button type="primary" style="width: 300px; margin: 10px 0" :disabled="userSelect === -1"
                   @click="confirmClick">
            确认挂号
        </el-button>
    </div>
</template>

<script setup>
import {Plus} from '@element-plus/icons-vue'
import UserCard from "@/components/HospitalTop/UserCard.vue";
import {getDoctorInfo, getUsers} from "@/api/hospital/index.js";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {postOrder} from "@/api/order/index.js";

let users = ref([])
let dInfo = ref({})
let userSelect = ref(-1)
onMounted(async () => {
    let result = await getUsers()
    if (result.code === 200) {
        users.value = result.data
    }
    await doctorInfo()
})

let $route = useRoute()
let $router = useRouter()
const doctorInfo = async () => {
    let result = await getDoctorInfo($route.query.docID)
    if (result.code === 200) {
        dInfo.value = result.data
    }
}
const clickUserCard = (index) => {
    userSelect.value = index
}
const confirmClick = async () => {

    let result = await postOrder(dInfo.value.hoscode, dInfo.value.id, users.value[userSelect.value].id)
    console.log(result)
    if (result.code === 200) {
        $router.push({
            path: '/member/order',
            query: {
                'id': result.data
            }
        })
    }

}
</script>

<style scoped lang="scss">
.confirm {
  text-align: center;

  .tip {
    font-weight: 900;
    font-size: 20px;
    margin: 20px;

  }

  .box-card {
    margin: 10px 0;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .content {
      display: flex;
      flex-wrap: wrap;

      .user {
        width: 32%;
        margin: 5px;
      }
    }
  }

}
</style>