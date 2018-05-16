export const capitalize = (source) => {
    if (source !== undefined && source !== '') {
        return source.charAt(0).toUpperCase() + source.slice(1)
    } else {
        return ''
    }
}