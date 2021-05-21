import { generateInitialArray } from '../utils/helpers';
import * as actionTypes from '../actions/actionTypes';

let size = 4;
// const numberArray = generateInitialArray(size);

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0, 14, 15];

let initialState = {
  size: size,
  numbers: numberArray,
  steps: 0,
  isPaused: false,
  time: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_POSITION:
      return {
        ...state,
        steps: state.steps + 1,
        numbers: action.payload,
      };
    case actionTypes.NEW_GAME:
      return {
        ...state,
        steps: 0,
        numbers: action.payload,
        isPaused: false,
      };
    case actionTypes.SIZE_CHANGE:
      return {
        ...state,
        size: action.payload,
        numbers: generateInitialArray(action.payload),
        steps: 0,
        time: 0,
      };
    case actionTypes.PAUSE_GAME:
      return {
        ...state,
        isPaused: !state.isPaused,
      };
    case actionTypes.TIMER_UPDATE:
      return {
        ...state,
        time: state.time + 1,
      };
    case actionTypes.TIMER_RESET:
      return {
        ...state,
        time: 0,
      };
    default:
      return state;
  }
};

export default reducer;
