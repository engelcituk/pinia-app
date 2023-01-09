<script setup lang="ts">
import useClients from '@/clients/composables/useClients'

    const {} = useClients()

</script>

<template>
    <ul>
        <li>
        <RouterLink :to="{name:'client-id', params:{id: 1}}">
            Cliente name
        </RouterLink>
        </li>
        
    </ul>
</template>


<style scoped>

</style>