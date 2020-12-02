import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions as gameStateActions } from './../../actions/gameState'
import { actions as scoreActions } from './../../actions/score'

import { selectors as scoreSelectors} from './../../selectors/score'

import './styles.css'

const GameWin = () => {

    const score = useSelector(scoreSelectors.getScore)

    const dispatch = useDispatch()
    
    const handleChangeScreen = () => dispatch(gameStateActions.game())
    const handleZeroScore = () => dispatch(scoreActions.zero())

    const startAgain = () => {
        handleZeroScore()
        handleChangeScreen()
    }

  return (
    <div className="Container">
        <div className="Texts">
            <div className="Hello-text">
                Você ganhou!
            </div>
            <div className="Score-text">
                Sua pontuação foi: {score}
            </div>
        </div>
        <button 
            className="Start-button"
            onClick={() => startAgain()}
        >
            Jogar novamente
        </button>
    </div>
  );
}
    
export default GameWin