import {instance, APIResponseType, StandartAPIResponseType} from "./api";
import {usersType} from "../types/types";

type getUsersResponseType = {
    items: Array<usersType>
    totalCount: number
    error: string
}

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<APIResponseType <getUsersResponseType>>
        (`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    postFollow(id: number) {
        return instance.post<StandartAPIResponseType>(`follow/${id}`)
            .then(response => response.data)
    },

    delFollow(id: number) {
        return instance.delete<StandartAPIResponseType>(`follow/${id}`)
            .then(response => response.data)
    },
}