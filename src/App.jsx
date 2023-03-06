import React, { useState, useEffect } from 'react'
import { decode } from 'html-entities'
import Results from './Components/Results'
import Title from './Components/Title'

function App() {

  //5 question, general knowledge, any difficulty
  const API = "https://opentdb.com/api.php?amount=5&category=9&type=multiple"
  
  const [questionData, setQuestionData] = useState([])
  const [questionNum, setQuestionNum] = useState(0)
  const [playerSelected, setPlayerSelected] = useState("")
  const [isQuizFinished, setIsQuizFinished] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [score, setScore] = useState(0)

  function nextQuestion() {
    {/* Check if players choice is equal to the correct answer, increment score if true */}
    if(playerSelected == questionData[questionNum].correctAnswer) {
      setScore(prevScore => prevScore + 1)
    }
    
    {/* Increment through the questionData array when button pressed*/}
    if(questionNum < questionData.length - 1) {
      setQuestionNum(prevNum => prevNum + 1)
    }
    else {
      setIsQuizFinished(true)
    }
  }

  function handleStartQuiz() {
    setStartQuiz(true)
  }

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setQuestionData(data.results.map(question => {
        return {
          question: decode(question.question),
          correctAnswer: decode(question.correct_answer),
          incorrectAnswers: question.incorrect_answers,
          //sorting the array into a random order
          answerArray: [...question.incorrect_answers, question.correct_answer].sort((a,b) => 0.5 - Math.random())
        }
      })))
  },[])

  return (
    <div>
      {!startQuiz ? <Title begin={handleStartQuiz}/> : 
      <>
        {/* If isQuizFinished is not true, start the quiz and render the 1st question */}
        {!isQuizFinished ?
          <>
            {questionData[0] != null && 
              <div>
                <h2>
                  {questionData[questionNum].question}
                </h2>
                <div className='flex flex-col'>
                  {/* Render a button for each answer in the answersArray */}
                  {questionData[questionNum].answerArray.map(answer => {
                    return <button
                              key={answer} 
                              onClick={(e) => setPlayerSelected(e.target.textContent)} 
                              className='bg-violet-200 w-1/2 mt-2 mx-auto hover:bg-violet-400 focus:bg-violet-500'>
                                {decode(answer)}
                            </button>
                  })}
                </div>
                <div>
                  <button
                    onClick={nextQuestion} 
                    className='bg-teal-300 hover:bg-teal-400'>
                    Next Question
                  </button>
                </div>
              </div>
            }
          </>
        : 
          <Results score={score}/>
        }
      </>
      }
    </div>
  )
}

export default App
