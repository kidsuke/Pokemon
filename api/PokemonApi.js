import config from '../common/constants/config'
import { getJson } from '../common/utils/ApiUtils'

export const getPokemons = (limit = 10, offset = 0) => {
    const url = `${config.pokeApiUrl}/pokemon/?limit=${limit}&offset=${offset}`
    return getJson(url)
}