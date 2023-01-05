<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterSetupStore } from '@/store/counter-setup';
import CounterSetupValue from '@/counter/components/CounterSetupValue.vue';

    const counterStore = useCounterSetupStore() //aqui no puedo desestructurar, pierdo la reactividad si se hace
    const { count, squareCount } = storeToRefs(counterStore) //con esto puedo desestructurar state y getters
    const { increment, incrementBy, } = counterStore //desestructuro del store
</script>

<template>
    <h1>Pinia Setup</h1>
    <h4>Counter 1 Page: {{count}}</h4>
    <h4>Squate: {{squareCount}}</h4>
    <br>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <!-- <button @click="counterStore.$reset()">Reset</button> -->

    <br>
    <CounterSetupValue/>

</template>
 

<style lang="scss" scoped>

</style>