# Quizzical - A multiple choice trivia game

Live Site URL: [https://quizzbizz.netlify.app/](https://quizzbizz.netlify.app/)

## Overview

I love going to trivia nights with my friends so I decided to develop a trivia game with React, Tailwind CSS and the Open Trivia API. Players are able to test their trivia skills with quizzes from four categories including Sports, History, Film and Geography

### Built with

- React
- React Router
- Tailwind CSS
- Mobile-first workflow
- [Open Trivia API](https://opentdb.com/api_config.php)


![](/public/menu.png)

## Features
- Players have choice on what category and difficulty they would like to play
- These values are stored in state and used within the api call to generate the correct questions
- Each quiz is 10 questions
- Each question is multiple choice with 4 options as answers
- Current question count displayed
- Results screen which displays your final score
- Bronze, Silver or Gold medal will display based on your results
- Mobile and desktop responsive

## Purpose and Goal
After completing the React course from Scrimba.com, the final solo project is a quiz game called Quizzical, which uses the Open Trivia API to generate a unique quiz each playthrough. I was excited to complete this project as I enjoy going to trivia nights with my friends. I also saw it as a great opportunity to further practice and refine my skills by utilizing data from API calls (Open Trivia API) and to practice React and Tailwind CSS.

![](/public/question.png)

The Quizzical game presented by Scrimba has a relatively basic overall design. I decided to redesign the game and implement a menu where the player could select different quiz categories and difficulty options. Before I started coding I viewed and played around with some other trivia based apps to get a feel for how important information is often presented.

## Highlight
For this project I really like how the main menu turned out. Before starting this project I thought that this would be harder to implement, however it was quite simple and all that was needed was a function that was created in the App component that updated state (category, difficulty), and that was passed down to the Title component. When a category div is selected the state would update in the App component accordingly.

![](/public/results.png)

The API url was also set as a template string that would take in these state variables when called. I also enjoyed working with this simple violet/purple color palette and I think it gives the app a nice polished look. Traditionally I feel more comfortable working with darker color palettes, so this was a good exercise in trying something different and I believe that the end result works well.

## Author

- Tulsi Kalola

