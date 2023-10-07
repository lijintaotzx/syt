<template>
    <div class="check">
        <el-form
                ref="ruleFormRef"
                label-width="120px"
                :rules="rules"
                :model="ruleForm"
        >
            <el-form-item label="用户姓名" prop="name">
                <el-input style="width:60%" v-model="ruleForm.name" placeholder="请输入用户姓名"/>
            </el-form-item>
            <el-form-item label="证件类型" prop="cardType">
                <el-select v-model="ruleForm.cardType" placeholder="请选择证件类型">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    />
                </el-select>
            </el-form-item>
            <el-form-item label="证件号码" prop="cardNumber">
                <el-input style="width:60%" v-model="ruleForm.cardNumber" placeholder="请输入证件号码"/>
            </el-form-item>
            <el-form-item label="上传证件" :required="true">
                <el-upload
                        class="avatar-uploader"
                        action="http://139.198.34.216:8205/api/oss/file/fileUpload?fileHost=userAuah"
                        :show-file-list="false"
                >
                    <img src="@/assets/images/auth_example.png" class="avatar"/>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button @click="resetForm(ruleFormRef)">重写</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script setup>
import {reactive, ref} from "vue";

const options = [
    {
        value: '10',
        label: '身份证',
    },
    {
        value: '210',
        label: '护照',
    },
]

const ruleForm = reactive({
    name: '',
    cardType: '10',
    cardNumber: ''
})

const onSubmit = () => {
    console.log(ruleForm)
}
const ruleFormRef = ref()
const validatorName = (rule, value, callback) => {
    console.log(value)
    if (value) {

    }
}
const validatorcardNumber = (rule, value, callback) => {
    var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(value);
    if (!check) callback(new Error(
        '请输入正确的证件号码！'
    ));
    if (value.length === 15 || value.length === 18) {
        callback()
    } else {
        callback(new Error(
            '请输入正确的证件号码！'
        ))
    }
}
const validatorCardType = (rule, value, callback) => {
    if (value === '10' || value === '20') {
        callback()
    } else {
        callback(
            new Error(
                '证件类型有误！'
            )
        )
    }
}

const rules = reactive({
    name: [
        {required: true, message: '用户姓名不得为空！', trigger: 'change'},
    ],
    cardType: [{required: true, validator: validatorCardType}],
    cardNumber: [{required: true, validator: validatorcardNumber}],
})

const resetForm = (ruleFormRef) => {
    ruleFormRef.resetFields()
}

</script>

<style scoped lang="scss">

</style>