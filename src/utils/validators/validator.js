export const required = value => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = length => {
    return (value) => {
        if (value.length > length) return `max length ${length} symbols`
        return undefined
    }
}