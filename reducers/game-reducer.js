import {GET_GENERATIONS, GET_GENERATIONS_SUCCESS, GET_GENERATIONS_ERROR} from '../common/constants/action-types'

const initialState = {
    generations: [],
    isLoading: false,
    isError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_GENERATIONS:
            return {
                ...state, // The spread operator ... allows referencing existing state without mutating it.
                isLoading: true
            }
        case GET_GENERATIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                generations: action.generations
            }
        case GET_GENERATIONS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state // If the action isn't handled by this reducer, just return the existing state.
    }
}