import { combineReducers } from 'redux'

import { reducers as scoreReducers } from './score'
import { reducers as gameStateReducers } from './gameState'

const reducers = combineReducers({
    scoreReducers,
    gameStateReducers,
})

export { reducers }
