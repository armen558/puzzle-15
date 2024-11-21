import {createSlice} from '@reduxjs/toolkit';

type TimerSlice = {
  time: number
};

const initialTimerState: TimerSlice = {time: 0}

export const timerSlice = createSlice({
  name: 'timer',
  initialState: initialTimerState,
  reducers: {
    updateTimer: state => {
      state.time += 1
    },
    resetTimer: state => {
      state.time = 0
    },
  }
})
