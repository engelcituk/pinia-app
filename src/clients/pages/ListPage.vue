<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue'
import PaginationNumbers from '@/clients/components/PaginationNumbers.vue'

</script>

<template>
    <div>
    <h1>Listado de clientes</h1>
        <!-- Client List -->
        <ClientList/>

        <!-- Pagination Numbers -->
        <PaginationNumbers/>
        <!-- Loading modal -->
    </div>
</template>


<style scoped>

</style>