import { LoginFormDataType } from '../redux/auth-reducer'
import { instance, APIResponseType, StandartAPIResponseType, ResultCodeForCaptcha, ResultCodesEnum } from './api'

type MeResponseType = {
    id: number
    email: string
    login: string
}

type LoginResponseType = {
    userId: number
}

export const authApi = {
    authMe () {
        return instance.get<APIResponseType<MeResponseType>>('auth/me').then(res => res.data)
    },
    login (data: LoginFormDataType) {
        return instance.post<APIResponseType<LoginResponseType, ResultCodesEnum | ResultCodeForCaptcha>>('auth/login', {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,
            captcha: data.captcha
        }).then(res => res.data)
    },
    logout () {
        return instance.delete<StandartAPIResponseType>('auth/login').then(res => res.data)
    }
}
