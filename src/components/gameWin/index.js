import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions as scoreActions } from './../../actions/score'
import { actions as gameStateAction } from './../../actions/gameState'


import { selectors as scoreSelectors} from './../../selectors/score'

import './styles.css'

const GameWin = () => {

    const score = useSelector(scoreSelectors.getScore)

    const dispatch = useDispatch()
    
    const handleZeroScore = () => dispatch(scoreActions.zero())
    const handleChangeScreen = () => dispatch(gameStateAction.add())

    const startAgain = () => {
        handleZeroScore()
        refreshPage()    
    }

    const refreshPage = () => { 
        window.location.reload(); 
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
            <div className="Description-text">
                Agora você pode adicionar uma nova pergunta!
            </div>
        </div>

        <button 
            className="Start-button"
            onClick={() => handleChangeScreen()}
        >
            Sim, quero adicionar 
        </button>
        <button 
            className="Start-button"
            onClick={() => startAgain()}
        >
            Voltar para o menu
        </button>
    </div>
  );
}
    
export default GameWin