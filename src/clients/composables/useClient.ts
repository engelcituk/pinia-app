import { ref, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import type { Client } from '@/clients/interfaces/client';
import clientsApi from '@/api/clients-api';

// Esto es una promesa que resuelve un client
const getClient = async( id: number ):Promise<Client> => {
    
    const { data } =  await clientsApi.get(`/clients/${id}`)
    return data
}

const useClient = (id: number) => {

    const client = ref<Client>();

    const {isLoading, data } = useQuery(
        ['client', id],
        () => getClient(id),
        {
            // cacheTime: 0 // si pongo esto ignora caché y siempre hará la petición
        }
    )
    // pendiente de la data cuando cambie, el client toma el valor de data
    watch(  data, ()=> {
        if( data.value){
            client.value = {...data.value } //resuelve el bug de readonly al querer editar
        }
    }, {immediate: true})

    return {
        isLoading,
        client
    }

  }

export default useClient