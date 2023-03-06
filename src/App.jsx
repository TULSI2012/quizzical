import React, { useState, useEffect } from 'react'
import { decode } from 'html-entities'

function App() {

  //5 question, general knowledge, any difficulty
  const API = "https://opentdb.com/api.php?amount=5&category=9&type=multiple"
  
  const [questionData, setQuestionData] = useState([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setQuestionData(data.results.map(question => {
        return {
          question: question.question,
          correctAnswer: question.correct_answer,
          incorrectAnswers: question.incorrect_answers,
          //sorting the array into a random order
          answerArray: [...question.incorrect_answers, question.correct_answer].sort((a,b) => 0.5 - Math.random())
        }
      })))
  },[])

  console.log(questionData[0])
  return (
    <div>
      <h1 className='text-red-100'>Test</h1>
      {questionData[0] != null && 
        <div>
          <h2>
            {decode(questionData[0].question)}
          </h2>
          <div className='flex flex-col'>
            <button>{questionData[0].answerArray[0]}</button>
            <button>{questionData[0].answerArray[1]}</button>
            <button>{questionData[0].answerArray[2]}</button>
            <button>{questionData[0].answerArray[3]}</button>
          </div>
        </div>
      }
    </div>
  )
}

export default App
