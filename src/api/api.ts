import axios from "axios";
import {userType, usersType} from "../types/types";
import {LoginFormDataType} from "../redux/auth-reducer";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "476ac98e-c691-4d31-9d8e-45090502379f"}
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}

type StandartAPIResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type getUsersResponseType = {
    items: Array<usersType>
    totalCount: number
    error: string
}

type PutPhotoResponseType = {
    data: {
        small: string
        large: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: { userId: number }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}

type getCatpchaResponseType = {
    data: { url: string }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
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

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<userType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },
    putStatus(text: string) {
        return instance.put<StandartAPIResponseType>(`profile/status`, {status: text})
            .then(response => response.data)
    },
    putPhoto(photo: any) {
        const formData = new FormData
        formData.append('image', photo)
        return instance.put<PutPhotoResponseType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multypart/form-data'
            }
        }).then(response => response.data)
    },
    saveProfile(profile: userType) {
        return instance.put<StandartAPIResponseType>(`profile`, profile)
            .then(response => response.data)
    }
}

export const authApi = {
    authMe() {
        return instance.get<MeResponseType>('auth/me').then(res => res.data)
    },
    login(data: LoginFormDataType) {
        return instance.post<LoginResponseType>('auth/login', {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,
            captcha: data.captcha,
        }).then(res => res.data)
    },
    logout() {
        return instance.delete<StandartAPIResponseType>(`auth/login`).then(res => res.data)
    },
}

export const securityApi = {
    getCaptcha() {
        return instance.get<getCatpchaResponseType>('/security/get-captcha-url')
            .then(res => res.data)
    },
}