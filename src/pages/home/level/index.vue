<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级：</div>
            <ul class="hospital">
                <li :class="{active:activeFlag === 'all'}" @click="changeLevel('all')">全部</li>
                <li v-for="(level, index) in levelArr"
                    :class="{active:activeFlag===level.value}"
                    :key="index"
                    @click="changeLevel(level.value)"
                >
                    {{ level.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import {reqHospitalLevelOrRegin} from '@/api/home/index.js'
import {onMounted, ref, defineEmits} from "vue";

let levelArr = ref([])
let activeFlag = ref('all')

const getHospitalLevel = async () => {
    let result = await reqHospitalLevelOrRegin('Hostype')
    if (result.code === 200) {
        levelArr.value = result.data
    }
}

onMounted(() => {
    getHospitalLevel()
})
const changeLevel = (level) => {
    activeFlag.value = level
    $emit('getLevel', level)
}

let $emit = defineEmits(['getLevel'])

</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;

  h1 {
    font-weight: 900;
    margin: 10px 0;
  }

  .content {
    font-size: 13px;
    display: flex;

    .left {
      margin-right: 10px;
    }

    .hospital {
      display: flex;

      li {
        margin-right: 10px;

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