const arrayCompare = (arr1: any[], arr2: any[]): boolean => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const checkArray = (arr: number[]): boolean => {
  let checker = [...arr];
  checker.sort((a, b) => {
    return a - b;
  });
  let checkerArr = checker.slice(1);
  checkerArr.push(0);

  let resultArray = [...arr];

  return arrayCompare(checkerArr, resultArray);
};

function isSolvable(puzzle: number[], size: number):boolean {
  let inversions = 0;
  let emptyRow = 0;

  // Count inversions
  for (let i = 0; i < puzzle.length; i++) {
    if (puzzle[i] === 0) {
      emptyRow = Math.floor(i / size) + 1; // Determine the row of the empty space (1-based index)
      continue;
    }
    for (let j = i + 1; j < puzzle.length; j++) {
      if (puzzle[j] !== 0 && puzzle[i] > puzzle[j]) {
        inversions++;
      }
    }
  }

  // If the grid size is odd, puzzle is solvable if inversions are even
  if (size % 2 !== 0) {
    return inversions % 2 === 0;
  }

  // If the grid size is even, check the position of the empty space
  return (emptyRow % 2 === 0) ? (inversions % 2 !== 0) : (inversions % 2 === 0);
}

function generateInitialArray(size: number): number[] {
  const totalNumbers = size * size;
  let puzzle = Array.from({ length: totalNumbers }, (_, i) => i); // [0, 1, 2, ..., totalNumbers-1]

  // Fisher-Yates shuffle
  for (let i = puzzle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [puzzle[i], puzzle[j]] = [puzzle[j], puzzle[i]];
  }

  // Ensure the puzzle is solvable
  while (!isSolvable(puzzle, size)) {
    for (let i = puzzle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [puzzle[i], puzzle[j]] = [puzzle[j], puzzle[i]];
    }
  }

  return puzzle;
}

const timeFormat = (num: number): string => {
  let minutes: number | string = Math.floor(num / 60);
  let secs: number | string = num % 60;
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (secs < 10) {
    secs = '0' + secs;
  }
  return minutes + ' : ' + secs;
};

const hasNeighbourEmptyCell = (current: number, empty: number, size: number) => {
  return (
    (current + 1 === empty && empty % size !== 0) ||
    (current - 1 === empty && (empty + 1) % size !== 0) ||
    current + size === empty ||
    current - size === empty
  );
};

export { checkArray, generateInitialArray, timeFormat, hasNeighbourEmptyCell };
