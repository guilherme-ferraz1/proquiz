const INITIAL_STATE = {
    gameState: "welcome"
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "WELCOME":
            return {...state, gameState: "welcome"}
        case "GAME_OVER":
            return {...state, gameState: "gameOver"}
        case "GAME":
            return {...state, gameState: "game"}
        case "GAME_WIN":
            return {...state, gameState: "win"}
        case "ADD_QUESTION":
            return {...state, gameState: "add"}
        default:
            return state
    }
}

export { reducers }