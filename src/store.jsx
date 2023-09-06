import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/cart/quizSlice";
import gameReducer from "./features/cart/gameSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    game: gameReducer,
  },
});
