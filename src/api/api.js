import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "476ac98e-c691-4d31-9d8e-45090502379f"}
})


export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    postFollow(id) {
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
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    putStatus(text) {
        return instance.put(`profile/status`, {status: text})
    },
    putPhoto(photo) {
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
            rememberMe: data.rememberMe,
            captcha: data.captcha,
        })
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}

export const securityApi = {
    getCaptcha() {
        return instance.get('/security/get-captcha-url')
    },
}