import React from 'react'
import logoQuiz from './../../assets/logoquiz.png'
import { useSelector } from 'react-redux'

import { selectors as gameStateSelectors } from './../../selectors/gameState'

import './App.css';

import {GameScreen, WelcomeScreen, GameOver, GameWin} from './../../components'

function App() {

  const gameState = useSelector(gameStateSelectors.getState)

  const renderTabs = () => {
    switch(gameState) {
      case "welcome":
        return <WelcomeScreen/>
      case "game":
        return <GameScreen/>
      case "gameOver":
        return <GameOver/>
      case "win":
        return <GameWin/>
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
