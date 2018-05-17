import { combineReducers } from 'redux'
import gameReducer from './game-reducer'
import pokemonReducer from './pokemon-reducer'

// For now there is only one reducer, but you can easily add more with combineReducers().
const rootReducer = combineReducers({
    pokemonState: pokemonReducer,
    gameState: gameReducer
})

export default rootReducer