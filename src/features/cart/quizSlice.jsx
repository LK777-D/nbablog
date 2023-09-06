import { createSlice } from "@reduxjs/toolkit";
// import nbaQuizQuestions from "../../quizQuestion";
import {
  legendPlayers,
  legendsTeams,
  nba2000s1,
  nba2000s2,
  nba2010s1,
  nba2010s2,
  nbaAllStar1,
  nbaAllStar2,
} from "../../quizQuestion";
const initialState = {
  quizzes: [
    {
      quizId: 1,
      quizQuestions: legendPlayers,
      questionIndex: 0,
      score: 0,
      restart: false,
      start: true,
    },
    {
      quizId: 2,
      quizQuestions: legendsTeams,
      questionIndex: 0,
      score: 0,
      restart: false,
      start: true,
    },
    {
      quizId: 3,
      quizQuestions: nba2000s1,
      questionIndex: 0,
      score: 0,
      restart: false,
      start: true,
    },
    {
      quizId: 4,
      quizQuestions: nba2000s2,
      questionIndex: 0,
      score: 0,
      restart: false,
      start: true,
    },
    {
      quizId: 5,
      quizQuestions: nba2010s1,
      questionIndex: 0,
      score: 0,
      restart: false,
      start: true,
    },
    {
      quizId: 6,
      quizQuestions: nba2010s2,
      questionIndex: 0,
      score: 0,
      restart: false,
      start: true,
    },
    {
      quizId: 7,
      quizQuestions: nbaAllStar1,
      questionIndex: 0,
      score: 0,
      restart: false,
      start: true,
    },
    {
      quizId: 8,
      quizQuestions: nbaAllStar2,
      questionIndex: 0,
      score: 0,
      restart: false,
      start: true,
    },
    // Add more quizzes here...
  ],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion: (state, action) => {
      const { quizId, answer } = action.payload;
      const quiz = state.quizzes.find((q) => q.quizId === quizId);
      const currentQuestion = quiz.quizQuestions[quiz.questionIndex];
      const correctAnswer = currentQuestion.correctAnswer;

      if (answer === correctAnswer) {
        quiz.score += 1;
      }

      if (quiz.questionIndex < quiz.quizQuestions.length - 1) {
        quiz.questionIndex += 1;
      } else {
        quiz.restart = true;
      }
    },
    restartQ: (state, action) => {
      const { quizId } = action.payload;
      const quiz = state.quizzes.find((q) => q.quizId === quizId);
      quiz.restart = false;
      quiz.score = 0;
      quiz.questionIndex = 0;
    },
    startQ: (state, action) => {
      const { quizId } = action.payload;
      const quiz = state.quizzes.find((q) => q.quizId === quizId);
      quiz.start = false;
    },
  },
});

export const { nextQuestion, restartQ, startQ } = quizSlice.actions;
export default quizSlice.reducer;
