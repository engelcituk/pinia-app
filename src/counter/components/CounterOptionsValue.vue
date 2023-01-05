<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useCounterOptionsStore } from '@/store/counter-options';

    const counterStore = useCounterOptionsStore() //aqui no puedo desestructurar, pierdo la reactividad si se hace
    const { count, lastChanged } = storeToRefs(counterStore) //con esto puedo desestructurar state y getters


</script>

<template>
    <h1>El valor es: {{count}}</h1>
    <h4>Ultimo cambio: {{lastChanged}}</h4>
</template>


<style scoped>

</style>