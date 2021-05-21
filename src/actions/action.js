import { generateInitialArray } from '../utils/helpers';
import store from '../store';
import * as actionTypes from './actionTypes';

export const changePosition = data => {
  let arr = store.getState().numbers;
  let newArr = [...arr];
  newArr[data.emptyIndex] = newArr[data.currentIndex];
  newArr[data.currentIndex] = 0;
  return {
    type: actionTypes.CHANGE_POSITION,
    payload: newArr,
  };
};

export const resetGame = () => {
  let size = store.getState().size;
  const data = generateInitialArray(size);
  return {
    type: actionTypes.NEW_GAME,
    payload: data,
  };
};

export const sizeChange = data => {
  return {
    type: actionTypes.SIZE_CHANGE,
    payload: data,
  };
};

export const pauseGame = data => {
  return {
    type: actionTypes.PAUSE_GAME,
    payload: data,
  };
};

export const timerUpdate = time => {
  return {
    type: actionTypes.TIMER_UPDATE,
    payload: time,
  };
};

export const timerReset = () => {
  return {
    type: actionTypes.TIMER_RESET,
  };
};
