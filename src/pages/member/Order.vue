<template>
    <orders v-if="!$route.query.id"/>
    <order-details v-else/>
</template>

<script setup>
import {useRoute} from "vue-router";
import Orders from "@/pages/member/Orders.vue";
import OrderDetails from "@/pages/member/OrderDetails.vue";

let $route = useRoute()
</script>

<style scoped lang="scss">

</style>