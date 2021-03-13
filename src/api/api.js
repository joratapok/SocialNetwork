import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "df10e29a-08da-4eb5-b4ee-199d2cd1d939"}
    })

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    postFollow(id)  {
        return instance.post(`follow/${id}`).then(response => response.data)
    },

    delFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
}

