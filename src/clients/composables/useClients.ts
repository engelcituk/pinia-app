import clientsApi from "@/api/clients-api";
import { useQuery  } from "@tanstack/vue-query";
import type { Client } from "@/clients/interfaces/client";

const getClients = async():Promise<Client[]> => {
    const { data } = await clientsApi.get<Client[]>('clients?_page=1')
    return data
}

const useClients = () => {
    const { isLoading, data } =  useQuery(
        ['clients?page=1', 1],
        () => getClients()
    )

    return{

    }
}

export default useClients;