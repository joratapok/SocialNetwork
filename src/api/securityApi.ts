import {instance, ResultCodesEnum} from "./api";

type getCatpchaResponseType = {
    data: { url: string }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export const securityApi = {
    getCaptcha() {
        return instance.get<getCatpchaResponseType>('/security/get-captcha-url')
            .then(res => res.data)
    },
}