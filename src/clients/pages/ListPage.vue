<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue'
import PaginationNumbers from '@/clients/components/PaginationNumbers.vue'
import LoadingModal from '@/shared/components/LoadingModal.vue'

import useClients from '@/clients/composables/useClients';

const { isLoading, clients, currentPage, totalPages, getPage } = useClients()

</script>

<template>
    <div>
    <h1>Listado de clientes</h1>
        <!-- Client List -->
        <ClientList :clients="clients"/>

        <!-- Pagination Numbers -->
        <PaginationNumbers
            :current-page="currentPage"
            :total-pages="totalPages"
            @page-changed="getPage"
        />

        <!-- Loading modal -->
        <LoadingModal v-if="isLoading"/>
    </div>
</template>


<style scoped>

</style>