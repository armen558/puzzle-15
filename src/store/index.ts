import { configureStore } from '@reduxjs/toolkit';
import { timerSlice } from './timer';
import { gameSlice } from './game';

const index = configureStore({
  reducer: { timer: timerSlice.reducer, game: gameSlice.reducer }
});

export const { updateTimer, resetTimer } = timerSlice.actions;
export const { changePosition, newGame, pauseGame, changeSize } = gameSlice.actions;
export default index;

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;