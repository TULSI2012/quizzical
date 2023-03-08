import React from "react";

export default function Title({ begin }) {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-white text-4xl font-semibold">
                Quizzical
            </h1>
            <button 
                onClick={() => begin()}
                className="bg-violet-100 text-violet-700 font-semibold rounded-md px-2 py-1 mt-4 shadow-md hover:bg-pink-400 hover:text-white transition-all hover:-translate-y-1 duration-200">
                Start Quiz
            </button>
        </div>
    )
}