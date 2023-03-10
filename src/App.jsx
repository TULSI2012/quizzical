import React, { useState, useEffect } from 'react'
import { decode } from 'html-entities'
import Results from './Components/Results'
import Title from './Components/Title'
import Question from './Components/Question'

function App() {

  const [questionData, setQuestionData] = useState([])
  const [questionNum, setQuestionNum] = useState(0)
  const [playerSelected, setPlayerSelected] = useState("")
  const [isQuizFinished, setIsQuizFinished] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [score, setScore] = useState(0)
  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")
  
  //5 question, general knowledge, any difficulty
  const API = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`

  function nextQuestion() {
    //Check if players choice is equal to the correct answer, increment score if true
    if(playerSelected == questionData[questionNum].correctAnswer) {
      setScore(prevScore => prevScore + 1)
    }
    //Increment through the questionData array when button pressed
    if(questionNum < questionData.length - 1) {
      setQuestionNum(prevNum => prevNum + 1)
    }
    else {
      setIsQuizFinished(true)
    }
  }

  //Passed down to Title component as props - allows player to select cateogry
  function handleCategory(category) {
    setCategory(category)
  }


  //Passed down to Title component as props - allows player to select the difficulty
  function handleDifficulty(difficulty) {
    setDifficulty(difficulty)
  }

  //Passed down to Title component as props
  function handleStartQuiz() {
    setStartQuiz(true)
  }

  //Passed down to QUestion component as props
  function playersChoice(e) {
    setPlayerSelected(e.target.textContent)
  }

  //initial API call on first page render
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
  },[startQuiz])

  return (
    <div className='background-image h-screen flex flex-col justify-center items-center'>
      {!startQuiz ? <Title 
                        begin={handleStartQuiz}
                        handleCategory={handleCategory}
                        handleDifficulty={handleDifficulty}
                        category={category}/> : 
      <>
        {/* If isQuizFinished is not true, start the quiz and render the 1st question */}
        {!isQuizFinished ?
          <>
            {questionData[0] != null && 
                <Question 
                  question={questionData[questionNum].question}
                  answers={questionData[questionNum].answerArray}
                  next={nextQuestion}
                  playersChoice={playersChoice}
                  questionNum={questionNum}/>
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
