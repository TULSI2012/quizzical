import React from "react";
import { decode } from 'html-entities'

export default function Question({ question, answers, next, playersChoice, questionNum}) {
    return (
        <div className="flex flex-col px-4 items-center justify-center bg-violet-50 mx-4 py-4 rounded-xl w-[95%] max-w-lg shadow-xl">
            <p className="text-violet-400 font-semibold text-lg mb-4 w-full max-w-md">
                Question {questionNum + 1}<span className="text-violet-300 text-sm ml-1">/10</span>
            </p>
            <h2 className="text-violet-500 font-semibold text-2xl mb-28 w-full max-w-md">
                {question}
            </h2>
            <div className='flex flex-col gap-y-2 mb-10 w-full max-w-md'>
            {/* Render a button for each answer in the answersArray */}
            {answers.map(answer => {
                return <button
                        key={answer} 
                        onClick={(e) => playersChoice(e)} 
                        className="bg-violet-200 text-violet-500 font-semibold rounded-3xl px-2 py-2 hover:bg-pink-400 focus:text-white focus:bg-pink-400 hover:text-white transition-all duration-200">
                            {decode(answer)}
                        </button>
                })}
            </div>
            <button
                onClick={next} 
                className="text-white bg-violet-500 min-w-[140px] mx-auto rounded-full py-4 font-semibold shadow-md max-w-[200px]">
                Next Question
            </button>
        </div>
    )
}