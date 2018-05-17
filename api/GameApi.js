import config from '../common/constants/config'
import { getJson } from '../common/utils/ApiUtils'

export const getGenerations = (limit = 10, offset = 0) => {
    const url = `${config.pokeApiUrl}/generation/?limit=${limit}&offset=${offset}`
    return getJson(url)
}

export const getGenerationsByUrl = (url) => {
    return getJson(url)
}
