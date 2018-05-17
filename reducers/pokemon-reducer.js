import {GET_POKEMONS, GET_POKEMONS_SUCCESS, GET_POKEMONS_ERROR} from '../common/constants/action-types'

const initialState = {
    pokemons: [],
    isLoading: false,
    isError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state, // The spread operator ... allows referencing existing state without mutating it.
                isLoading: true
            }
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemons: action.pokemons
            }
        case GET_POKEMONS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state // If the action isn't handled by this reducer, just return the existing state.
    }
}