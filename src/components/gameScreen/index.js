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

const GameScreen = ({questions}) => {

    const score = useSelector(scoreSelectors.getScore)

    const dispatch = useDispatch()

    const [solvedQuestions, setSolvedQuestions] = useState(0)
    const [actualQuestion, setActualQuestion] = useState(questions[solvedQuestions])
    const [canSkip, setCanSkip] = useState(true)

    useEffect(() => {

        var questionsSize = Object.size(questions);

        setActualQuestion(questions[solvedQuestions])

        if (solvedQuestions === questionsSize) {
            handleWin()
        }
    }, [solvedQuestions]);

    const handleIncrementScore = () => dispatch(scoreActions.increment())
    const handleLose = () => dispatch(gameStateActions.gameOver())
    const handleWin = () => dispatch(gameStateActions.win())

    const checkQuestion = (index) => {
        if (index === actualQuestion.correct_index) {
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

    return (
        <div className="Container">
            <div className="Score">
                Pontuação: {score}
            </div>
            <div className="Question">
                {actualQuestion.title}
            </div>
            <div className="Answers">
                <button 
                    className="Answer"
                    onClick={() => checkQuestion(0)}
                >
                    {actualQuestion.answer1}
                </button>
                <button 
                    className="Answer"
                    onClick={() => checkQuestion(1)}
                >
                    {actualQuestion.answer2}
                </button>  
                <button 
                    className="Answer"
                    onClick={() => checkQuestion(2)}
                >
                    {actualQuestion.answer3}
                </button>  
                <button 
                    className="Answer"
                    onClick={() => checkQuestion(3)}
                >
                    {actualQuestion.answer4}
                </button>  
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
    
export default GameScreen