<template>
    <el-card class="box-card" shadow="hover" @click="goDetail">
        <div class="content">
            <div class="left">
                <div class="hospital-name">{{ hospitalInfo.hosname }}</div>
                <div class="tip">
                    <div class="level">
                        <svg t="1690120068748" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="2594" width="16" height="16">
                            <path d="M170.666667 938.666667a85.333333 85.333333 0 0 1-85.333334-85.333334v-341.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h85.333333l128-341.333334h42.666667a170.666667 170.666667 0 0 1 170.666666 170.666667v170.666667h232.021334a85.333333 85.333333 0 0 1 82.773333 106.026666l-69.12 276.693334A170.666667 170.666667 0 0 1 677.376 938.666667H170.666667z m85.333333-426.666667H170.666667v341.333333h85.333333v-341.333333z m187.136-341.333333L341.333333 442.154667V853.333333h336.085334a85.333333 85.333333 0 0 0 82.773333-64.64L829.354667 512H512V239.530667c0-35.925333-27.52-65.408-62.592-68.565334L443.136 170.666667z"
                                  fill="#000000" p-id="2595"></path>
                        </svg>
                        <span>{{ hospitalInfo.param.hostypeString }}</span>
                    </div>
                    <div class="time">
                        <svg t="1690120283970" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="2542" width="16" height="16">
                            <path d="M511.333 127.333c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078-35.286 35.287-76.359 62.983-122.078 82.321-47.3 20.006-97.583 30.15-149.451 30.15s-102.15-10.144-149.451-30.15c-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.301-20.006 97.583-30.15 149.451-30.15m0-64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z"
                                  fill="" p-id="2543"></path>
                            <path d="M702.856 543.333H511.333c-17.673 0-32-14.326-32-32v-286.73c0-17.673 14.327-32 32-32s32 14.327 32 32v254.73h159.522c17.673 0 32 14.327 32 32s-14.326 32-31.999 32z"
                                  fill="" p-id="2544"></path>
                        </svg>
                        <span>每天{{ hospitalInfo.bookingRule.releaseTime }}放号</span>
                    </div>
                </div>

            </div>
            <div class="right">
                <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="">
            </div>
        </div>
    </el-card>
</template>

<script setup>
import {defineProps} from "vue";
import {useRouter} from "vue-router";

defineProps(['hospitalInfo'])

let $router = useRouter()
const goDetail = () => {
    $router.push({'path': '/hospital'})
}


</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;

  .right {
    img {
      width: 50px;
      height: 50px;
    }
  }

  .left {
    width: 60%;

    .tip {
      color: #7f7f7f;
      margin-top: 20px;
      font-size: 13px;
      display: flex;
      justify-content: space-between;

      .level {
        display: flex;
        align-items: center;

        span {
          margin-left: 5px;
        }
      }

      .time {
        display: flex;
        align-items: center;

        span {
          margin-left: 5px;
        }
      }

    }
  }
}
</style>