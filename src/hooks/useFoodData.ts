import { IFoodData } from "@/interfaces/IFoodData";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<IFoodData[]> => {
    const response = axios.get(API_URL + '/food')

    return response;
}

export function useFoodData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}