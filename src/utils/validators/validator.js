export const required = value => {
    if (value) return undefined
    return `field is required`
}

export const maxLengthCreator = length => {
    return (value) => {
        if (value) {
          return (value.length > length) ? `max length ${length} symbols`: undefined
        }
    }
}

export const minLength = (value) => {
    if (value.length < 1) return `whrite something  ༼ つ ◕_◕ ༽つ`
    return undefined
}

export const moreThan30 = (value) => {
  if (value.length > 30) return `max length 30 symbols`
  return undefined
}

export const moreThan200 = (value) => {
    if (value.length > 200) return `max length 200 symbols`
    return undefined
}