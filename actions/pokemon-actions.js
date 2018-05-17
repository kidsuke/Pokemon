import {GET_POKEMONS, GET_POKEMONS_SUCCESS, GET_POKEMONS_ERROR} from '../common/constants/action-types'
import * as PokemonApi from '../api/PokemonApi'

export const getPokemonsAction = () => (dispatch) => {
    dispatch({ type: GET_POKEMONS })
    PokemonApi.getPokemons()
        .then(response => {
            const promises = response.results.map(result => PokemonApi.getPokemonByUrl(result.url))
            return Promise.all(promises)
        })
        .then((pokemons) => {
            dispatch({
                type: GET_POKEMONS_SUCCESS,
                pokemons
            })
        })
        .catch(() => {
            dispatch({ type: GET_POKEMONS_ERROR })
        })
}