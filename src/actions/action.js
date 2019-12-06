import { generateInitialArray } from '../helpers/generateArr';
import store from '../store';

export const changePosition = data => {
    let arr = store.getState().numbers;
    let newArr = [...arr];
    newArr[data.emptyIndex] = newArr[data.currentIndex];
    newArr[data.currentIndex] = 0;
    return {
        type: 'CHANGE_POSITION',
        payload: newArr
    }
};

export const resetGame = () => {
    let size = store.getState().size;
    const data = generateInitialArray(size);
    return {
        type: 'NEW_GAME',
        payload: data
    }
};

export const sizeChange = data => {
    return {
        type: 'SIZE_CHANGE',
        payload: data,
    }
}

export const pauseGame = data => {
    return {
        type: 'PAUSE',
        payload: data
    }
}