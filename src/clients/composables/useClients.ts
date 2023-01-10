import { watch, computed } from 'vue';
import clientsApi from "@/api/clients-api";
import { useQuery  } from "@tanstack/vue-query";
import { storeToRefs } from 'pinia';

import type { Client } from "@/clients/interfaces/client";
import { useClientsStore } from '@/store/clients';

const getClients = async(page: number):Promise<Client[]> => {
    const { data } = await clientsApi.get<Client[]>(`clients?_page=${page}`)
    return data
}

const useClients = () => {

    const store = useClientsStore()
    const { currentPage, clients, totalPages } = storeToRefs(store)

    const { isLoading, data } =  useQuery(
        ['clients?page', currentPage ],
        () => getClients(currentPage.value),// referencia reactiva, por lo que se toma su valor con value
        
    )

    watch( data, clients => {
        if(clients){
            store.setClients( clients )
        }
    })

    return{
        //Properties
        clients,
        currentPage,
        isLoading,
        totalPages,

        //methods
        getPage(page: number){
            store.setPage(page)
        },

        //Getters
        totalPageNumber: computed(
            ()=> [ ...new Array(totalPages.value) ].map( (value, index)=> index + 1 )
          ),

    }
}

export default useClients;