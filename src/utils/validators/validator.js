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

export const moreThan30 = (value) => {
  if (value > 30) return `max length 30 symbols`
  return undefined
}
