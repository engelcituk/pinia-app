import { ref, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import type { Client } from '@/clients/interfaces/client';
import clientsApi from '@/api/clients-api';

// Esto es una promesa que resuelve un client
const getClient = async( id: number ):Promise<Client> => {
    
    const { data } =  await clientsApi.get<Client>(`/clients/${id}`)
    return data
}

const useClient = (id: number) => {

    const client = ref<Client>();

    const { isLoading, data, isError } = useQuery(
        ['client', id],
        () => getClient(id),
        { retry: false },
        
    )
    // pendiente de la data cuando cambie, el client toma el valor de data
    watch(  data, ()=> {
        if( data.value){
            client.value = {...data.value } //resuelve el bug de readonly al querer editar
        }
    }, {immediate: true})

    return {
        client,
        isError,
        isLoading,
    }

  }

export default useClient