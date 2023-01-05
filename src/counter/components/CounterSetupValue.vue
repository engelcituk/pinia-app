<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useCounterSetupStore } from '@/store/counter-setup';

    const counterStore = useCounterSetupStore() //aqui no puedo desestructurar, pierdo la reactividad si se hace
    const { count, lastChange } = storeToRefs(counterStore) //con esto puedo desestructurar state y getters

</script>

<template>
    <h1>El valor es: {{count}}</h1>
    <h4>Ultimo cambio: {{lastChange}}</h4>
</template>


<style scoped>

</style>