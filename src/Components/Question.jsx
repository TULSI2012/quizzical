import React from "react";
import { decode } from 'html-entities'

export default function Question({ question, answers, next, playersChoice}) {
    return (
        <div className="flex flex-col px-10 h-screen items-center justify-center">
            <p className="text-violet-300 font-semibold text-lg mb-4 w-full max-w-md">
                Question 1<span className="text-violet-400 text-sm ml-1">/10</span>
            </p>
            <h2 className="text-violet-50 font-semibold text-xl mb-28 w-full max-w-md">
                {question}
            </h2>
            <div className='flex flex-col gap-y-2 mb-10 w-full max-w-md'>
            {/* Render a button for each answer in the answersArray */}
            {answers.map(answer => {
                return <button
                        key={answer} 
                        onClick={(e) => playersChoice(e)} 
                        className="border-pink-400 border-2 text-white font-semibold rounded-3xl px-2 py-2 hover:bg-pink-400 hover:text-white transition-all duration-200">
                            {decode(answer)}
                        </button>
                })}
            </div>
            <button
                onClick={next} 
                className="text-white bg-blue-400 min-w-[140px] mx-auto rounded-full py-4 font-semibold shadow-md max-w-[200px]">
                Next Question
            </button>
        </div>
    )
}