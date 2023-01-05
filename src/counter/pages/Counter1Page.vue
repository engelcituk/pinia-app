<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterOptionsStore } from '@/store/counter-options';

    const counterStore = useCounterOptionsStore() //aqui no puedo desestructurar, pierdo la reactividad si se hace
    const {count, squareCount} = storeToRefs(counterStore) //con esto puedo desestructurar state y getters
</script>

<template>
    <h1>Pinia options</h1>
    <h4>Counter 1 Page: {{count}}</h4>
    <h4>Squate: {{squareCount}}</h4>
    
</template>
 

<style lang="scss" scoped>

</style>