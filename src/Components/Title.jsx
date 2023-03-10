import React from "react";
import { MdOutlineSportsSoccer } from 'react-icons/md'
import { GiEgyptianSphinx } from 'react-icons/gi'
import { BiCameraMovie } from 'react-icons/bi'
import { FaGlobeAmericas } from 'react-icons/fa'

export default function Title({ handleStartQuiz, handleCategory, handleDifficulty, category }) {
    return (
        <div className="flex flex-col px-4 items-center justify-center bg-violet-50 mx-4 py-4 rounded-xl w-[95%] max-w-lg shadow-xl">
            <h1 className="text-violet-500 text-6xl font-semibold mb-6">
                Quizzical
            </h1>
            <h2 className="text-violet-500 text-2xl font-semibold mb-2">
                Select a Category
            </h2>
            <div className="flex flex-wrap full items-center justify-center gap-6 mb-6">

                <div 
                    onClick={() => handleCategory("21")}
                    className={`flex flex-col items-center rounded-lg w-32 py-4 shadow-md group hover:bg-pink-400 cursor-pointer transition-all duration-200 ${category === "21" ? 'bg-pink-400' : "bg-violet-100"}`}>
                    <div className={`bg-violet-50 rounded-xl w-12 h-12 flex items-center justify-center shadow-md mb-2 group-hover:bg-violet-50/25 ${category === "21" ? 'bg-violet-50/25' : ""}`}>
                        <MdOutlineSportsSoccer className={`text-violet-600 text-4xl group-hover:text-violet-50 group-hover:animate-wiggle ${category === "21" ? 'text-violet-50' : ""}`}/>
                    </div>
                    <h2 className={`text-violet-600 font-semibold group-hover:text-violet-50 ${category === "21" ? 'text-violet-50' : ""}`}>
                        Sports
                    </h2>
                    <p className={`text-violet-400 text-xs group-hover:text-violet-50 ${category === "21" ? 'text-violet-50' : ""}`}>
                        10 Questions
                    </p>
                </div>

                <div 
                    onClick={() => handleCategory("23")}
                    className={`flex flex-col items-center rounded-lg w-32 py-4 shadow-md group hover:bg-pink-400 cursor-pointer transition-all duration-200 ${category === "23" ? 'bg-pink-400' : "bg-violet-100"}`}>
                    <div className={`bg-violet-50 rounded-xl w-12 h-12 flex items-center justify-center shadow-md mb-2 group-hover:bg-violet-50/25 ${category === "23" ? 'bg-violet-50/25' : ""}`}>
                        <GiEgyptianSphinx className={`text-violet-600 text-4xl group-hover:text-violet-50 group-hover:animate-wiggle ${category === "23" ? 'text-violet-50' : ""}`}/>
                    </div>
                    <h2 className={`text-violet-600 font-semibold group-hover:text-violet-50 ${category === "23" ? 'text-violet-50' : ""}`}>
                        History
                    </h2>
                    <p className={`text-violet-400 text-xs group-hover:text-violet-50 ${category === "23" ? 'text-violet-50' : ""}`}>
                        10 Questions
                    </p>
                </div>

                <div 
                    onClick={() => handleCategory("11")}
                    className={`flex flex-col items-center rounded-lg w-32 py-4 shadow-md group hover:bg-pink-400 cursor-pointer transition-all duration-200 ${category === "11" ? 'bg-pink-400' : "bg-violet-100"}`}>
                    <div className={`bg-violet-50 rounded-xl w-12 h-12 flex items-center justify-center shadow-md mb-2 group-hover:bg-violet-50/25 ${category === "11" ? 'bg-violet-50/25' : ""}`}>
                        <BiCameraMovie className={`text-violet-600 text-4xl group-hover:text-violet-50 group-hover:animate-wiggle ${category === "11" ? 'text-violet-50' : ""}`}/>
                    </div>
                    <h2 className={`text-violet-600 font-semibold group-hover:text-violet-50 ${category === "11" ? 'text-violet-50' : ""}`}>
                        Film
                    </h2>
                    <p className={`text-violet-400 text-xs group-hover:text-violet-50 ${category === "11" ? 'text-violet-50' : ""}`}>
                        10 Questions
                    </p>
                </div>

                <div 
                    onClick={() => handleCategory("22")}
                    className={`flex flex-col items-center rounded-lg w-32 py-4 shadow-md group hover:bg-pink-400 cursor-pointer transition-all duration-200 ${category === "22" ? 'bg-pink-400' : "bg-violet-100"}`}>
                    <div className={`bg-violet-50 rounded-xl w-12 h-12 flex items-center justify-center shadow-md mb-2 group-hover:bg-violet-50/25 ${category === "22" ? 'bg-violet-50/25' : ""}`}>
                        <FaGlobeAmericas className={`text-violet-600 text-4xl group-hover:text-violet-50 group-hover:animate-wiggle ${category === "22" ? 'text-violet-50' : ""}`}/>
                    </div>
                    <h2 className={`text-violet-600 font-semibold group-hover:text-violet-50 ${category === "22" ? 'text-violet-50' : ""}`}>
                        Geography
                    </h2>
                    <p className={`text-violet-400 text-xs group-hover:text-violet-50 ${category === "22" ? 'text-violet-50' : ""}`}>
                        10 Questions
                    </p>
                </div>

            </div>

            <h2 className="text-violet-500 text-2xl font-semibold mb-2">
                Choose Difficulty
            </h2>
            <div className="flex flex-row gap-x-4 mb-6">
                <button 
                    onClick={() => handleDifficulty("easy")}
                    className="text-violet-500 font-semibold border-2 border-violet-400 px-4 py-1 rounded-full hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:bg-pink-400 focus:border-pink-400 focus:text-white shadow-md transition-all duration-200">
                    Easy
                </button>
                <button 
                    onClick={() => handleDifficulty("medium")}
                    className="text-violet-500 font-semibold border-2 border-violet-400 px-4 py-1 rounded-full hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:bg-pink-400 focus:border-pink-400 focus:text-white shadow-md transition-all duration-200">
                    Medium
                </button>
                <button 
                    onClick={() => handleDifficulty("hard")}
                    className="text-violet-500 font-semibold border-2 border-violet-400 px-4 py-1 rounded-full hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:bg-pink-400 focus:border-pink-400 focus:text-white shadow-md transition-all duration-200">
                    Hard
                </button>
            </div>

            <button 
                onClick={() => handleStartQuiz()}
                className="bg-violet-100 text-violet-700 font-semibold rounded-md text-xl px-4 py-1 mt-4 shadow-md hover:bg-pink-400 hover:text-white transition-all hover:-translate-y-1 duration-200">
                Start Quiz
            </button>
        </div>
    )
}

//className="text-violet-500 font-semibold  mb-28 w-full max-w-md"

/* Quiz Parameters
    Category
        - Sports &category=21
        - History &category=23
        - Film category=11
        - Geography &category=22
    Difficulty
        - Easy &difficulty=easy
        - Medium &difficulty=medium
        - Hard &difficulty=hard
    Number of Questions
        - 10 amount=10
    Type
        -Multiple choice &type=multiple


    https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
*/
