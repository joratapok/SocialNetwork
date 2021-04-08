import {userType} from "../types/types";
import {instance, ResultCodesEnum, StandartAPIResponseType} from "./api";


type PutPhotoResponseType = {
    data: {
        photos: {
            small: string
            large: string
        }
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export const profileApi = {
    getProfile(userId: number | null) {
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