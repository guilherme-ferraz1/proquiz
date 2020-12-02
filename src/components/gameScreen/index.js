import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { actions as scoreActions } from './../../actions/score'
import { actions as gameStateActions } from './../../actions/gameState'

import { selectors as scoreSelectors} from './../../selectors/score'

import './styles.css';

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


let perguntas = [
    {
        "answers": [
            {
                "value": "1",
                "isCorrect": false
            },
            {
                "value": "2",
                "isCorrect": true
            },
            {
                "value": "3",
                "isCorrect": false
            },
            {
                "value": "4",
                "isCorrect": false
            }
        ],
      "title": "quanto é 1 + 1?"
    }, 
    {
        "answers": [
            {
              "value": "1",
              "isCorrect": false
            },
            {
              "value": "2",
              "isCorrect": false
            },
            {
              "value": "3",
              "isCorrect": true
            },
            {
              "value": "4",
              "isCorrect": false
            }
        ],
          "title": "quanto é 1 + 2?"
    },
    {
        "answers": [
            {
              "value": "1",
              "isCorrect": false
            },
            {
              "value": "2",
              "isCorrect": false
            },
            {
              "value": "3",
              "isCorrect": false
            },
            {
              "value": "4",
              "isCorrect": true
            }
        ],
          "title": "quanto é 1 + 3?"
    }
]

const GameScreen = () => {

    const score = useSelector(scoreSelectors.getScore)

    const dispatch = useDispatch()

    const [solvedQuestions, setSolvedQuestions] = useState(0)
    const [actualQuestion, setActualQuestion] = useState(perguntas[solvedQuestions])
    const [canSkip, setCanSkip] = useState(true)

    useEffect(() => {

        var questionsSize = Object.size(perguntas);

        setActualQuestion(perguntas[solvedQuestions])

        if (solvedQuestions === questionsSize) {
            handleWin()
        }

    }, [solvedQuestions]);
    
    const handleIncrementScore = () => dispatch(scoreActions.increment())
    const handleLose = () => dispatch(gameStateActions.gameOver())
    const handleWin = () => dispatch(gameStateActions.win())

    const checkQuestion = (isCorrect) => {
        if (isCorrect) {
            handleIncrementScore()
            setSolvedQuestions(solvedQuestions + 1)
        } else {
            handleLose()
        }
    }

    const skipQuestion = () => {
        setSolvedQuestions(solvedQuestions + 1)
        setCanSkip(false)
    }

    if (actualQuestion) {

        return (
            <div className="Container">
                <div className="Score">
                    Pontuação: {score}
                </div>
                <div className="Question">
                    {actualQuestion.title}
                </div>
                <div className="Answers">
                    {actualQuestion.answers.map((answer, id) => (
                        <button 
                            key={id}
                            className="Answer"
                            onClick={() => checkQuestion(answer.isCorrect)}
                        >
                            {answer.value}
                        </button>   
                    ))}
                </div>
                {canSkip ? (
                    <button 
                        className="Skip"
                        onClick={() => skipQuestion()}
                    >
                        Pular
                    </button>
                ) : null}
            </div>  
        )
    }
    
}
    
export default GameScreen