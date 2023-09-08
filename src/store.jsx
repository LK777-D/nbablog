import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quizSlice";
import gameReducer from "./features/gameSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    game: gameReducer,
  },
});
