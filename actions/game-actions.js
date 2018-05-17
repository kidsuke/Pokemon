import {GET_GENERATIONS, GET_GENERATIONS_SUCCESS, GET_GENERATIONS_ERROR} from '../common/constants/action-types'
import * as GameApi from '../api/GameApi'

export const getGenerationsAction = () => (dispatch) => {
    dispatch({ type: GET_GENERATIONS })
    GameApi.getGenerations()
        .then(response => {
            const promises = response.results.map(result => GameApi.getGenerationsByUrl(result.url))
            return Promise.all(promises)
        })
        .then((generations) => {
            dispatch({
                type: GET_GENERATIONS_SUCCESS,
                generations
            })
        })
        .catch(() => {
            dispatch({ type: GET_GENERATIONS_ERROR })
        })
}