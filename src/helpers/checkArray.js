const arrayCompare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
};

export const checkArray = (arr) => {
    let checker = [...arr];
    checker.sort((a, b) => {
        return a - b;
    });
    let checkerArr = checker.slice(1);
    checkerArr.push(0);

    let resultArray = [...arr];

    return arrayCompare(checkerArr, resultArray);
};