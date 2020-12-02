const INITIAL_STATE = {
    score: 0
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SCORE_INCREMENT":
            return {...state, score: state.score + 100}
        case "SCORE_ZERO":
            return {...state, score: INITIAL_STATE.score}
        default:
            return state
    }
}

export { reducers }