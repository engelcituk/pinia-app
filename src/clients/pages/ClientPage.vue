<script setup lang="ts">
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useClient from '@/clients/composables/useClient';
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute()
const router = useRouter()


const { client, isLoading, isError, clientMutation, updateClient, isUpdating, isUpdatingSuccess } = useClient( +route.params.id ) //ponerle un mas + al argumento lo convierte en un numero


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
        <h3 v-if="isUpdating">Guardando..</h3>
        <h3 v-if="isUpdatingSuccess">Guardado</h3>

        <LoadingModal v-if="isLoading"/>

        <div v-if="client">
            <h1>{{client.name}}</h1>
            <!-- AL poner el ! en el argumento le indico que siemore tendrá un cliente -->
            <form @submit.prevent="updateClient(client!)">
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
                    :disabled="isUpdating"
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