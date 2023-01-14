import { ref, watch, computed } from 'vue';
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';


import type { Client } from '@/clients/interfaces/client';
import clientsApi from '@/api/clients-api';

// const queryClient = useQueryClient()

// Esto es una promesa que resuelve un client
const getClient = async( id: number ):Promise<Client> => {
    
    const { data } =  await clientsApi.get<Client>(`/clients/${id}`)
    return data
}


// Promesa que resuelve un client
const updateClient = async (client:Client ):Promise<Client> => {
    /* await new Promise( resolve => {
        setTimeout(() => resolve(true), 2000);
    })*/
    const { data } = await clientsApi.patch<Client>(`clients/${client.id}`, client) //patch regresa un Cliente
    // const queries = queryClient.getQueryCache().findAll(['clients?page='], {exact:false} )
    // queries.forEach( query => query.reset() )//limpio los datos que hay en caché
    // queries.forEach( query => query.fetch() )
    return data
}

const useClient = (id: number) => {

    const client = ref<Client>();

    const clientMutation = useMutation( updateClient )

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
        clientMutation,

        //method
        updateClient: clientMutation.mutate,
        isUpdating: computed( ()=> clientMutation.isLoading.value ),
        isUpdatingSuccess: computed( ()=> clientMutation.isSuccess.value ),

        isErrorUpdating: computed( ()=> clientMutation.isError.value),

        
    }

  }

export default useClient