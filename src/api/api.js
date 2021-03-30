import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "0198ea73-ecaa-43b0-9858-5124d6f0a451"}
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
    getProfile(userId) {
        return profileApi.getProfile(userId)
    },
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId)  {
        return instance.get(`profile/status/${userId}`)
    },
    putStatus(text)  {
        return instance.put(`profile/status`, { status: text })
    },
    putPhoto(photo)  {
        const formData = new FormData
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multypart/form-data'
            }
            })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }

}

export const authApi = {
    authMe() {
        return instance.get('auth/me')
    },
    login(data) {
        return instance.post('auth/login', {
          email: data.email,
          password: data.password,
          rememberMe: data.rememberMe
        })
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}
