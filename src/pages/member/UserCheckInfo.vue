<template>
    <el-descriptions
            class="margin-top"
            :column="1"
            :size="size"
            border
    >
        <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                    用户姓名
                </div>
            </template>
            {{ props.userInfo.name }}
        </el-descriptions-item>
        <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                    证件类型
                </div>
            </template>
            {{ props.userInfo.certificatesType === "10" ? "身份证" : "护照" }}
        </el-descriptions-item>
        <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                    证件号码
                </div>
            </template>
            {{ props.userInfo.certificatesNo }}
        </el-descriptions-item>
    </el-descriptions>
</template>

<script setup>
const props = defineProps(['userInfo'])

</script>

<style scoped lang="scss">
.cell-item {
  width: 100px
}
</style>