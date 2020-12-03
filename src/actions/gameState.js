const actions = {
    welcome: () => ({
        type: "WELCOME"
    }),
    gameOver: () => ({
        type: "GAME_OVER"
    }),
    game: () => ({
        type: "GAME"
    }),
    win: () => ({
        type: "GAME_WIN"
    }),
    add: () => ({
        type: "ADD_QUESTION"
    }),
}

export {actions}