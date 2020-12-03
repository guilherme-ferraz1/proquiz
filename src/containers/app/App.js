import React, { useState, useEffect } from 'react'
import axios from 'axios'

import logoQuiz from './../../assets/logoquiz.png'

import { useSelector } from 'react-redux'
import { selectors as gameStateSelectors } from './../../selectors/gameState'

import './App.css';

import {GameScreen, WelcomeScreen, GameOver, GameWin, AddQuestion} from './../../components'

function App() {

  const [questions, setQuestions] = useState(null)

  useEffect(() => {
    axios.get(`https://proquiz-api.herokuapp.com/Questions/`)
    .then(res => {
      setQuestions(res.data)
    })
    
}, []);

  const gameState = useSelector(gameStateSelectors.getState)

  const renderTabs = () => {
    switch(gameState) {
      case "welcome":
        return <WelcomeScreen/>
      case "game":
        return <GameScreen questions={questions}/>
      case "gameOver":
        return <GameOver/>
      case "win":
        return <GameWin/>
      case "add":
        return <AddQuestion/>
      default:
        <WelcomeScreen/>
    }
  }

  return (
    <div className="App-container">
      <img 
        src={logoQuiz} 
        alt="logoQuiz"
        className="App-logo" 
      />
      {renderTabs()}
    </div>
  );
}

export default App;
