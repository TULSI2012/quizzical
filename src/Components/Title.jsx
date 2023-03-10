import React from "react";
import { MdOutlineSportsSoccer } from 'react-icons/md'
import { GiEgyptianSphinx } from 'react-icons/gi'
import { BiCameraMovie } from 'react-icons/bi'
import { FaGlobeAmericas } from 'react-icons/fa'

export default function Title({ begin }) {
    return (
        <div className="flex flex-col px-4 items-center justify-center bg-violet-50 mx-4 py-4 rounded-xl w-[95%] max-w-lg shadow-xl">
            <h1 className="text-violet-500 text-6xl font-semibold mb-6">
                Quizzical
            </h1>
            <div className="flex flex-wrap w-3/4 items-center justify-center gap-6 ">

                <div className="bg-violet-100 flex flex-col items-center rounded-lg w-32 py-2 shadow-md group hover:bg-pink-400 cursor-pointer transition-all duration-200">
                    <div className="bg-violet-50 rounded-xl w-12 h-12 flex items-center justify-center shadow-md mb-2  group-hover:bg-violet-50/25">
                        <MdOutlineSportsSoccer className="text-violet-600 text-4xl group-hover:text-violet-50"/>
                    </div>
                    <h2 className="text-violet-600 font-semibold group-hover:text-violet-50">
                        Sports
                    </h2>
                    <p className="text-violet-400 text-xs group-hover:text-violet-50">
                        10 Questions
                    </p>
                </div>

                <div className="bg-violet-100 flex flex-col items-center rounded-lg w-32 py-2 shadow-md">
                    <div className="bg-violet-50 rounded-xl w-12 h-12 flex items-center justify-center shadow-md mb-2">
                        <GiEgyptianSphinx className="text-violet-600 text-4xl"/>
                    </div>
                    <h2 className="text-violet-600 font-semibold">
                        History
                    </h2>
                    <p className="text-violet-400 text-xs">
                        10 Questions
                    </p>
                </div>

                <div className="bg-violet-100 flex flex-col items-center rounded-lg w-32 py-2 shadow-md">
                    <div className="bg-violet-50 rounded-xl w-12 h-12 flex items-center justify-center shadow-md mb-2">
                        <BiCameraMovie className="text-violet-600 text-4xl"/>
                    </div>
                    <h2 className="text-violet-600 font-semibold">
                        Film
                    </h2>
                    <p className="text-violet-400 text-xs">
                        10 Questions
                    </p>
                </div>

                <div className="bg-violet-100 flex flex-col items-center rounded-lg w-32 py-2 shadow-md">
                    <div className="bg-violet-50 rounded-xl w-12 h-12 flex items-center justify-center shadow-md mb-2">
                        <FaGlobeAmericas className="text-violet-600 text-4xl"/>
                    </div>
                    <h2 className="text-violet-600 font-semibold">
                        Geography
                    </h2>
                    <p className="text-violet-400 text-xs">
                        10 Questions
                    </p>
                </div>

            </div>
            <button 
                onClick={() => begin()}
                className="bg-violet-100 text-violet-700 font-semibold rounded-md px-2 py-1 mt-4 shadow-md hover:bg-pink-400 hover:text-white transition-all hover:-translate-y-1 duration-200">
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
