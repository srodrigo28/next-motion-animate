import { IFoodData } from "@/interfaces/IFoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"

const API_URL = 'http://localhost:8080'

const postData = async (data: IFoodData) : AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food', data)

    return response;
}

export function useFoodDataInsert() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries<any>(['food-data'])
        }
    })

    return mutate;
}