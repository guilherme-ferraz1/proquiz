import React, {useState} from 'react'
import axios from 'axios'

import './styles.css'

const AddQuestion = () => {
    
    const [question, setQuestion] = useState("")
    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")
    const [answer4, setAnswer4] = useState("")
    const [showError, setShowError] = useState(false)
    const [correctIndex, setCorrectIndex] = useState(0)

    const handleSubmit = event => {
        event.preventDefault();
    
        const questionObject = {
          title: question,
          answer1: answer1,
          answer2: answer2,
          answer3: answer3,
          answer4: answer4,
          correct_index: correctIndex
        };
    
        axios.post(`https://proquiz-api.herokuapp.com/Questions/`, questionObject)
          .then(res => {
            console.log(res)
            refreshPage()    
          }).catch((error) => {
              if (error) setShowError(true)
          })
      }

    const refreshPage = () => { 
        window.location.reload(); 
    }

    return (
        <div className="Container">
            <div className="Inputs">
                <input 
                    maxLength={70}
                    placeholder="Pergunta"
                    className="Option" 
                    value={question} 
                    onChange={e => setQuestion(e.target.value)}
                    required
                />
                <input 
                    maxLength={30}
                    placeholder="Resposta A"
                    className="Option" 
                    value={answer1} 
                    onChange={e => setAnswer1(e.target.value)}
                    required
                />
                <input 
                    maxLength={30}
                    placeholder="Resposta B"
                    className="Option" 
                    value={answer2} 
                    onChange={e => setAnswer2(e.target.value)}
                    required
                />
                <input 
                    maxLength={30}
                    placeholder="Resposta C"
                    className="Option" 
                    value={answer3} 
                    onChange={e => setAnswer3(e.target.value)}
                    required
                />
                <input 
                    maxLength={30}
                    placeholder="Resposta D"
                    className="Option" 
                    value={answer4} 
                    onChange={e => setAnswer4(e.target.value)}
                    required
                />
                <div className="Text">
                    Qual a alternativa correta?
                </div>
                <div className="Radio">
                    <label className="Label">A</label>
                    <input 
                        type="radio" 
                        value={0} 
                        defaultChecked
                        name="er"
                        onClick={e => setCorrectIndex(e.target.value)}
                    />
                    <label className="Label">B</label>
                    <input 
                        type="radio" 
                        name="er"
                        value={1}
                        onClick={e => setCorrectIndex(e.target.value)}
                    />
                    <label className="Label">C</label>
                    <input 
                        type="radio"
                        name="er"
                        value={2}
                        onClick={e => setCorrectIndex(e.target.value)}
                    />
                    <label className="Label">D</label>
                    <input 
                        type="radio" 
                        name="er"
                        value={3}
                        onClick={e => setCorrectIndex(e.target.value)}
                    />
                </div>
            </div>

            {showError &&
                <div className="Text-info"> 
                    Preencha todos os espaços para enviar
                </div>
            }

            <button 
                className="Start-button"
                onClick={handleSubmit}
            >
                Adicionar pergunta!
            </button> 
        </div>
  );
}
    
export default AddQuestion