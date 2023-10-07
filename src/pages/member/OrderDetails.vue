<template>
    <el-dialog
            v-model="dialogVisible"
            title="微信支付"
            width="30%"
    >
        <div class="pay-dialog">
            <img src="../../assets/images/code_login_wechat.png"/>
            <p>请用微信
                <svg t="1695220698397" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4404" width="16" height="16">
                    <path d="M814.933333 914.666667H214.4c-54.933333 0-99.733333-44.8-99.733333-99.733334V214.4c0-54.933333 44.8-99.733333 99.733333-99.733333h600.533333c54.933333 0 99.733333 44.8 99.733334 99.733333v600.533333c0 54.933333-44.8 99.733333-99.733334 99.733334z"
                          fill="#3FCF77" p-id="4405"></path>
                    <path d="M533.333333 602.666667c0 56-57.066667 101.333333-128 101.333333-14.933333 0-28.8-2.133333-42.133333-5.866667-6.4-1.6-37.333333 24-43.2 21.866667-6.4-2.666667 11.2-34.666667 5.333333-37.866667-29.333333-18.666667-48-46.933333-48-79.466666 0-56 57.066667-101.333333 128-101.333334s128 45.333333 128 101.333334z"
                          fill="#8CE2AD" p-id="4406"></path>
                    <path d="M746.666667 493.333333c0 54.4-32 102.4-81.066667 132.266667-8 4.8 26.133333 53.333333 17.066667 57.066667-8.533333 3.733333-60.266667-37.333333-69.866667-34.666667-19.2 5.333333-39.466667 8-60.8 8C444.266667 656 357.333333 582.933333 357.333333 493.333333S444.266667 330.666667 552 330.666667 746.666667 403.733333 746.666667 493.333333z"
                          fill="#FFFFFF" p-id="4407"></path>
                    <path d="M485.333333 464m-21.333333 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
                          fill="#3FCF77" p-id="4408"></path>
                    <path d="M357.333333 581.333333m-14.933333 0a14.933333 14.933333 0 1 0 29.866667 0 14.933333 14.933333 0 1 0-29.866667 0Z"
                          fill="#3FCF77" p-id="4409"></path>
                    <path d="M618.666667 464m-21.333334 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
                          fill="#3FCF77" p-id="4410"></path>
                </svg>
                扫一扫
            </p>
            <p>扫描二维码支付</p>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">关闭窗口</el-button>
          </span>
        </template>
    </el-dialog>

    <el-card class="box-card">
        <template #header>
            <h1>挂号详情</h1>
        </template>
        <div class="top">
            <el-tag class="ml-2" type="success" size="large"
                    style="width: 300px;height: 80px; font-size: 25px; font-weight: 900">
                <el-icon><Select/></el-icon>
                <span style="margin-left: 8px">{{ orderInfo.param?.orderStatusString }}</span>
            </el-tag>
            <div class="pay">
                <img src="@/assets/images/code_login_wechat.png" alt="">
                <div class="payInfo">
                    <p>微信
                        <svg t="1695220698397" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="4404" width="16" height="16">
                            <path d="M814.933333 914.666667H214.4c-54.933333 0-99.733333-44.8-99.733333-99.733334V214.4c0-54.933333 44.8-99.733333 99.733333-99.733333h600.533333c54.933333 0 99.733333 44.8 99.733334 99.733333v600.533333c0 54.933333-44.8 99.733333-99.733334 99.733334z"
                                  fill="#3FCF77" p-id="4405"></path>
                            <path d="M533.333333 602.666667c0 56-57.066667 101.333333-128 101.333333-14.933333 0-28.8-2.133333-42.133333-5.866667-6.4-1.6-37.333333 24-43.2 21.866667-6.4-2.666667 11.2-34.666667 5.333333-37.866667-29.333333-18.666667-48-46.933333-48-79.466666 0-56 57.066667-101.333333 128-101.333334s128 45.333333 128 101.333334z"
                                  fill="#8CE2AD" p-id="4406"></path>
                            <path d="M746.666667 493.333333c0 54.4-32 102.4-81.066667 132.266667-8 4.8 26.133333 53.333333 17.066667 57.066667-8.533333 3.733333-60.266667-37.333333-69.866667-34.666667-19.2 5.333333-39.466667 8-60.8 8C444.266667 656 357.333333 582.933333 357.333333 493.333333S444.266667 330.666667 552 330.666667 746.666667 403.733333 746.666667 493.333333z"
                                  fill="#FFFFFF" p-id="4407"></path>
                            <path d="M485.333333 464m-21.333333 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
                                  fill="#3FCF77" p-id="4408"></path>
                            <path d="M357.333333 581.333333m-14.933333 0a14.933333 14.933333 0 1 0 29.866667 0 14.933333 14.933333 0 1 0-29.866667 0Z"
                                  fill="#3FCF77" p-id="4409"></path>
                            <path d="M618.666667 464m-21.333334 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
                                  fill="#3FCF77" p-id="4410"></path>
                        </svg>
                        关注 北京114预约挂号
                    </p>
                    <p>快速预约挂号</p>
                </div>
            </div>

        </div>
        <div class="content">
            <div class="left">
                <el-descriptions
                        class="margin-top"
                        :column="1"
                        border
                >
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                就诊人信息
                            </div>
                        </template>
                        {{ orderInfo.patientName }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                就诊日期
                            </div>
                        </template>
                        {{ orderInfo.reserveDate }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                就诊科室
                            </div>
                        </template>
                        {{ orderInfo.depname }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                医生职称
                            </div>
                        </template>
                        {{ orderInfo.title }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                医师服务费
                            </div>
                        </template>
                        <span style="color:red">
                           {{ orderInfo.amount }}
                        </span>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                挂号单号
                            </div>
                        </template>
                        {{ orderInfo.outTradeNo }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                挂号时间
                            </div>
                        </template>
                        {{ orderInfo.createTime }}
                    </el-descriptions-item>
                </el-descriptions>
                <div class="bottom" v-if="orderInfo.orderStatus===0||orderInfo.orderStatus===1">
                    <el-popconfirm
                            title="你确定要取消预约吗?"
                            @confirm="confirmEvent"
                    >
                        <template #reference>
                            <el-button>取消预约</el-button>
                        </template>
                    </el-popconfirm>
                    <el-button type="primary" @click="dialogVisible=true">支付</el-button>
                </div>
            </div>
            <div class="right">
                <el-card shadow="never">
                    <template #header>
                        <h1>注意事项</h1>
                    </template>
                    <div class="info">
                        <p>1. 请确认就诊人信息是否准确，若填写错误，则无法取号，损失由本人承担！</p>
                        <p style="color: red">2. 【取号】当天需要在下午4点前取号完成，未取号视为爽约，该号不退不换！</p>
                        <p>3. 【退号】可以在每日下午3点半之前完成退号，逾期不可办理退号手续！</p>
                        <p>4.
                            北京114预约挂号，需要本人使用微信公众号进行预约，支持北京市医保患者使用北京社保卡在平台挂号，请于当日就诊，携带挂号所需证件进行取号就诊！</p>
                        <p>5. 请注意北京市医保患者在住院期间不能使用社保卡在门诊取号！</p>
                    </div>
                </el-card>
            </div>
        </div>

    </el-card>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {cancelOrder, getOrderDetail} from "@/api/order/index.js";

let dialogVisible = ref(false)
let $route = useRoute()
let orderInfo = ref({})
onMounted(async () => {
    fetchOrderDetail()
})
const fetchOrderDetail = async () => {
    let result = await getOrderDetail($route.query.id)
    if (result.code === 200) {
        orderInfo.value = result.data
    }
}
const confirmEvent = async () => {
    let result = await cancelOrder($route.query.id)
    console.log(result)
    if (result.code === 200) {
        fetchOrderDetail()
    }
}
</script>

<style scoped lang="scss">
.top {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  .pay {
    display: flex;
    align-items: center;
    margin: 25px 0;

    img {
      width: 40px;
      height: 40px;
    }

    .payInfo {
      margin-left: 10px;

      p {
        color: #7f7f7f;
        font-size: 14px;
      }
    }

  }
}

.content {
  display: flex;
  margin: 20px 0;

  .left {
    flex: 4;

    .bottom {
      margin: 10px 0;
    }
  }

  .right {
    flex: 6;
    margin-left: 10px;

    .info {
      p {
        font-size: 12px;
        line-height: 30px;
      }
    }
  }
}

.pay-dialog {
  text-align: center;

  p {
    line-height: 30px;
  }
}
</style>