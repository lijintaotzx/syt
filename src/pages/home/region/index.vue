<template>
    <div class="region">
        <div class="content">
            <div class="left">地区：</div>
            <div class="right">
                <ul>
                    <li :class="{active:activeFlag === 'all'}" @click="changeRegin('all')">全部</li>
                    <li v-for="(regin, index) in reginArr"
                        :key="index"
                        @click="changeRegin(regin.value)"
                        :class="{active:activeFlag===regin.value}"
                    >
                        {{ regin.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

import {onMounted, ref, defineEmits} from 'vue'
import {reqHospitalLevelOrRegin} from '@/api/home/index.js'

let reginArr = ref([])
let activeFlag = ref('all')


const getHospitalRegin = async () => {
    let result = await reqHospitalLevelOrRegin('Beijin')
    if (result.code === 200) {
        reginArr.value = result.data
    }
}
onMounted(() => {
    getHospitalRegin()
})

const changeRegin = (regin) => {
    activeFlag.value = regin
    $emit('getRegin', regin)
}

let $emit = defineEmits(['getRegin'])

</script>

<style scoped lang="scss">
.region {
  font-size: 13px;
  color: #7f7f7f;
  margin-top: 10px;

  .content {
    display: flex;

    .left {
      width: 50px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        margin-right: 10px;
        margin-bottom: 10px;

        &.active {
          color: #55a6fe;
        }
      }

      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }

  }
}
</style>