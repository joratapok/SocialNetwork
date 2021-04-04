export type postsType = {
    id: number
    post: string
    likesCount: number
}

export type contactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}

export type photosType = {
    small: string | null
    large: string | null
}

export type userType = {
    aboutMe: null | string
    contacts: contactsType
    fullName: null | string
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    photos: photosType
    userId: null | number
}

export type usersType = {
    name: string
    id: number
    photos: photosType
    status: string
    followed: boolean
}