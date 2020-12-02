import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions as gameStateActions } from './../../actions/gameState'
import { actions as scoreActions } from './../../actions/score'

import { selectors as scoreSelectors} from './../../selectors/score'

import './styles.css'

let youLostHaHa = 
    [
        "Pensei que você era mais PRÓ, tenta de novo.",
        "Agora vai. Só não vale pesquisar no google.",
        "Melhor desistir logo, você nunca vai ser PRÓ.",
        "Vai acabar derrubando o heroku com tanto erro.",
        "Foi quase. Mais sorte na próxima."
    ]

const GameOver = () => {

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
                Você errou!
            </div>
            <div className="Score-text">
                Sua pontuação foi: {score}
            </div>
            <div className="Description-text">
               {youLostHaHa[Math.floor(Math.random() * (youLostHaHa.length ) )]}
            </div>
        </div>
        <button 
            className="Start-button"
            onClick={() => startAgain()}
        >
            Tentar novamente
        </button>
    </div>
  );
}
    
export default GameOver