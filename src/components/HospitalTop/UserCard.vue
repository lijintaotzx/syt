<template>
    <el-card class="user-card" shadow="always">
        <template #header>
            <div class="top">
                <div class="left">
                    <el-button type="warning" round>{{ data.isInsure === 1 ? '医保' : '自费' }}</el-button>
                    <span style="padding-left: 10px">{{ data.name }}</span>
                </div>
                <el-button type="success" :icon="Edit" circle/>
            </div>
        </template>
        <div class="content">
            <p>证件类型：{{ data.param.certificatesTypeString }}</p>
            <p>证件号码：{{ data.certificatesNo }}</p>
            <p>用户性别：{{ data.sex === 0 ? '女' : '男' }}</p>
            <p>出生日期：{{ data.birthdate }}</p>
            <p>手机号码：{{ data.contactsPhone }}</p>
            <p>婚姻状况：{{ data.isMarry === 0 ? '未婚' : '已婚' }}</p>
            <p>当前住址：{{ data.address }}</p>
            <div class="confirm" v-if="index===userSelect">已选择</div>
        </div>
    </el-card>
</template>

<script setup>
import {Edit} from '@element-plus/icons-vue'
import {defineProps} from 'vue';

defineProps([
    'data',
    'index',
    'userSelect'
])

</script>

<style scoped lang="scss">
.user-card {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    padding: 3px;
    text-align: left;
    position: relative;

    p {
      line-height: 30px;
      font-size: 14px;
    }

    .confirm {
      position: absolute;
      width: 200px;
      height: 200px;
      color: red;
      border-radius: 50%;
      border: 1px dashed red;
      text-align: center;
      line-height: 200px;
      left: 15%;
      top: 12%;
      opacity: 0.5;
      transform: rotate(25deg);
      font-weight: 900;
    }
  }
}
</style>