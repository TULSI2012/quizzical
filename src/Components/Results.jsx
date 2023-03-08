import React from "react";

export default function Results(props) {
    return (
        <div className="flex flex-col py-4 items-center justify-center bg-violet-50 rounded-xl max-w-lg shadow-xl w-[90%]">
            <div className="w-1/3">
                <img src="/gold.png" alt="congats medal" />
            </div>
            <h2 className="text-violet-500 font-semibold text-4xl max-w-md">
                Congratulations!
            </h2>
            <p className="mt-4 bg-violet-200 text-violet-500 font-semibold rounded-3xl px-4 py-2">
                You scored {props.score} out of 10
            </p>
            <div className="flex gap-x-4">
                <button
                    onClick={() => window.location.reload()}
                    className="text-white bg-violet-500 min-w-[140px] mx-auto rounded-full py-4 font-semibold shadow-md max-w-[200px] mt-10 hover:bg-violet-600 transition-all duration-200">
                    Play Again
                </button>
                <button
                    className="text-white bg-violet-500 min-w-[140px] mx-auto rounded-full py-4 font-semibold shadow-md max-w-[200px] mt-10 hover:bg-violet-600 transition-all duration-200">
                    See Results
                </button>
            </div>
        </div>
    )
}

// 10 correct = gold medal + confetti
// 7, 8, 9 correct = silver medal
// 6 and below correct = bronze medal