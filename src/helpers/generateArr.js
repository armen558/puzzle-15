export const generateInitialArray = (size) => {
    let numberArray = [];

// Creating array of numbers
    for (let i = 0; i <= size * size - 1; i++) {
        numberArray.push(i);
    }

// Array shuffle
    for (let i = numberArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = numberArray[i];
        numberArray[i] = numberArray[j];
        numberArray[j] = temp;
    }
    return numberArray;
};