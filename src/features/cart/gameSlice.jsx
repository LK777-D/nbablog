import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  money: 100,
  selectedPlayers: [],
  existingPlayerAlert: false,
  lineupFullAlert: false,
  moneyAlert: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    draftPlayer: (state, action) => {
      const { player } = action.payload;
      const existingPlayer = state.selectedPlayers.some(
        (draftedPlayer) => draftedPlayer.id === player.id
      );

      if (state.selectedPlayers.length >= 5) {
        state.lineupFullAlert = true;
        return;
      }

      if (existingPlayer) {
        state.existingPlayerAlert = true;

        return;
      }

      const newTotal = (state.money = state.money - player.price);
      if (newTotal < 0 && newTotal < player.price) {
        state.moneyAlert = true;

        state.money = newTotal + player.price;
      } else {
        state.selectedPlayers = [...state.selectedPlayers, player];
      }
    },
    undraftPlayer: (state, action) => {
      state.selectedPlayers = state.selectedPlayers.filter(
        (player) => player.id !== action.payload.id
      );
      state.money = state.money + action.payload.price;
    },
    clearAlerts: (state) => {
      state.existingPlayerAlert = false;
      state.moneyAlert = false;
      state.lineupFullAlert = false;
    },
  },
});

export const { draftPlayer, undraftPlayer, clearAlerts } = gameSlice.actions;
export default gameSlice.reducer;
