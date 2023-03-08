import React from "react";
import { decode } from 'html-entities'

export default function Question({ question, answers, next, playersChoice}) {
    return (
        <div>
            <h2>
                {question}
            </h2>
            <div className='flex flex-col'>
            {/* Render a button for each answer in the answersArray */}
            {answers.map(answer => {
                return <button
                        key={answer} 
                        onClick={(e) => playersChoice(e)} 
                        className='bg-violet-200 w-1/2 mt-2 mx-auto hover:bg-violet-400 focus:bg-violet-500'>
                            {decode(answer)}
                        </button>
                })}
            </div>
            <button
                onClick={next} 
                className='bg-teal-300 hover:bg-teal-400'>
                Next Question
            </button>
        </div>
    )
}