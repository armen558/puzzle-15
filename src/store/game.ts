import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {INITIAL_BOARD_SIZE} from '../utils/constants';
import { generateInitialArray } from '../utils/helpers';

type GameSlice = {
  size: number;
  steps: number;
  isPaused: boolean;
  numbers: number[];
}

// const numberArray = generateInitialArray(size);

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15];

const initialGameState: GameSlice = {
  numbers: numberArray,
  isPaused: false,
  size: INITIAL_BOARD_SIZE,
  steps: 0,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    changePosition: (state, action: PayloadAction<number[]>) => {
      state.steps += 1;
      state.numbers = action.payload;
    },
    newGame: (state, action:PayloadAction<number[]>) => {
      state.steps = 0;
      state.numbers = action.payload;
      state.isPaused =  false;
    },
    pauseGame: state => {
      state.isPaused = !state.isPaused;
    },
    changeSize: (state, action:PayloadAction<number>) => {
      state.size = action.payload;
      state.numbers = generateInitialArray(action.payload);
      state.steps = 0;
    }
  }
})
