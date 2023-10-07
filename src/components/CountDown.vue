<template>
    <div>
        <span>获取验证码 ({{ number }})</span>
    </div>
</template>

<script setup>
import {ref, onMounted, defineProps, watch} from "vue";

let number = ref(5);

let props = defineProps(['flag']);
let $emit = defineEmits(['getFlag']);

watch(
    props.flag,
    () => {
        console.log()
        let timer = setInterval(() => {
            number.value--
            if (number.value === 0) {
                $emit('getFlag', false)
                clearInterval(timer)
            }
        }, 1000);
    },
    {
        immediate: true
    })


onMounted(() => {

})
</script>

<style scoped>

</style>