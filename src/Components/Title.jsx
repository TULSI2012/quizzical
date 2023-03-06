import React from "react";

export default function Title({ begin }) {
    return (
        <div>
            <h1>Quizzical</h1>
            <button 
                onClick={() => begin()}
                className="bg-green-200">
                Start Quiz
            </button>
        </div>
    )
}