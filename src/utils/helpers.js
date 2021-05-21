const arrayCompare = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const checkArray = arr => {
  let checker = [...arr];
  checker.sort((a, b) => {
    return a - b;
  });
  let checkerArr = checker.slice(1);
  checkerArr.push(0);

  let resultArray = [...arr];

  return arrayCompare(checkerArr, resultArray);
};

const generateInitialArray = size => {
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

const timeFormat = num => {
  let minutes = Math.floor(num / 60);
  let secs = num % 60;
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (secs < 10) {
    secs = '0' + secs;
  }
  return minutes + ' : ' + secs;
};

const hasNeighbourEmptyCell = (current, empty, size) => {
  return (
    (current + 1 === empty && empty % size !== 0) ||
    (current - 1 === empty && (empty + 1) % size !== 0) ||
    current + size === empty ||
    current - size === empty
  );
};

export { checkArray, generateInitialArray, timeFormat, hasNeighbourEmptyCell };
