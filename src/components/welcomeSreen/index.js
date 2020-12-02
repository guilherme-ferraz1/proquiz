import React from 'react'
import { useDispatch } from 'react-redux'

import { actions } from './../../actions/gameState'

import './styles.css';

const WelcomeScreen = () => {

    const dispatch = useDispatch()

    const handleChangeScreen = () => dispatch(actions.game())

    return (
        <div className="Container">
            <div className="Texts">
                <div className="Hello-text">
                    Seja bem-vindo!
                </div>
                <div className="Description-text">
                    Teste seus conhecimentos gerais. Acerte todas as 
                    questões para adicionar uma nova pergunta ao quiz. 
                </div>
            </div>
            <button 
                className="Start-button"
                onClick={() => handleChangeScreen()}
            >
                Iniciar quiz!
            </button>
        </div>
    );
    }
        
export default WelcomeScreen