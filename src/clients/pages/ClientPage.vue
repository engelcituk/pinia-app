<script setup lang="ts">
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useClient from '@/clients/composables/useClient';
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import type { Client } from '@/clients/interfaces/client';
import clientsApi from '@/api/clients-api';

const route = useRoute()
const router = useRouter()

const queryClient = useQueryClient()

const { client, isLoading, isError } = useClient( +route.params.id ) //ponerle un mas + al argumento lo convierte en un numero

// Promesa que resuelve un client
const updateClient = async (client:Client ):Promise<Client> => {
    /* await new Promise( resolve => {
        setTimeout(() => resolve(true), 2000);
    })*/
    const { data } = await clientsApi.patch<Client>(`clients/${client.id}`, client) //patch regresa un Cliente
    const queries = queryClient.getQueryCache().findAll(['clients?page='], {exact:false} )
    // queries.forEach( query => query.reset() )//limpio los datos que hay en caché
    queries.forEach( query => query.fetch() )
    return data
}

const clientMutation = useMutation( updateClient )

watch( clientMutation.isSuccess, ()=> {
    setTimeout(() => {
        clientMutation.reset()
    }, 2000);
})

watch( isError, () =>{
    if(isError.value){
        router.replace('/clients')
    }
})

</script>
<template>
    <div>
        <h3 v-if="clientMutation.isLoading.value">Guardando..</h3>
        <h3 v-if="clientMutation.isSuccess.value">Guardado</h3>

        <LoadingModal v-if="isLoading"/>

        <div v-if="client">
            <h1>{{client.name}}</h1>
            <!-- AL poner el ! en el argumento le indico que siemore tendrá un cliente -->
            <form @submit.prevent="clientMutation.mutate(client!)">
                <input
                    type="text"
                    placeholder="Nombre"
                    v-model="client.name"
                >
                <br>
                <input
                    type="text"
                    placeholder="Dirección"
                    v-model="client.address"
                >
                <br>
                <button
                    type="submit"
                    :disabled="clientMutation.isLoading.value"
                >Guardar</button>
            </form>

        </div>
    </div>
    <pre>
        {{ client }}
    </pre>
</template>


<style scoped>
input {
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 10px;
}
button{
    margin-bottom: 10px;
}
</style>