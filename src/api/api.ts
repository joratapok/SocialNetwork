import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '476ac98e-c691-4d31-9d8e-45090502379f' }
})

export enum ResultCodesEnum {
    // eslint-disable-next-line no-unused-vars
    Success = 0,
    // eslint-disable-next-line no-unused-vars
    Error = 1,
}

export enum ResultCodeForCaptcha {
    // eslint-disable-next-line no-unused-vars
    CaptchaIsRequired = 10,
}

export type StandartAPIResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    resultCode: RC
    messages: Array<string>
}
