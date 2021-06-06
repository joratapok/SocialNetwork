import { instance, StandartAPIResponseType } from './api'
import { usersType } from '../types/types'

type getUsersResponseType = {
    items: Array<usersType>
    totalCount: number
    error: string
}

export const usersApi = {
    getUsers (currentPage: number = 1, pageSize: number = 10, term: string = '', friend: null | boolean = null) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` +
            (friend === null ? '' : `&friend=${friend}`))
            .then(response => response.data)
    },

    postFollow (id: number) {
        return instance.post<StandartAPIResponseType>(`follow/${id}`)
            .then(response => response.data)
    },

    delFollow (id: number) {
        return instance.delete<StandartAPIResponseType>(`follow/${id}`)
            .then(response => response.data)
    },
    termUser (currentPage: number, pageSize: number, termUser: string) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${termUser}`)
            .then(response => response.data)
    }
}
