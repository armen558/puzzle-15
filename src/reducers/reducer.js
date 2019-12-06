import { generateInitialArray } from '../helpers/generateArr';

const numberArray = generateInitialArray(5);

// const numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,0,14,15];

let initialState = {
    size: 5,
    numbers: numberArray,
    steps: 0,
    isPaused: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_POSITION':
            return {
                ...state,
                steps: state.steps + 1,
                numbers: action.payload,
            };
        case 'NEW_GAME':
            return {
                ...state,
                steps: 0,
                numbers: action.payload,
            };
        case 'SIZE_CHANGE':
            return {
                ...state,
                size: action.payload,
                numbers: generateInitialArray(action.payload),
                steps: 0,
            }
        case 'PAUSE':
            return {
                ...state,
                isPaused: !state.isPaused,
            }
        default:
            return state;
    }
};

export default reducer;