import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {RootState, updateTimer, pauseGame, newGame, resetTimer, changePosition, AppDispatch} from '../../store';
import { hasNeighbourEmptyCell } from '../../utils/helpers';
import { generateInitialArray } from '../../utils/helpers';
import { checkArray } from '../../utils/helpers';
import PuzzleSizes from '../PuzzleSizes';
import Backdrop from '../Backdrop';
import InfoBar from '../InfoBar';
import Button from '../Button';
import Block from '../Block';

import './style.scss';

const Puzzle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { time } = useSelector((state: RootState) => state.timer)
  const {
    size,
    steps,
    numbers: numberArray,
    isPaused
  } = useSelector((state: RootState) => state.game)

  let hasWon = checkArray(numberArray);

  const onTimerUpdate = () => {
    dispatch(updateTimer())
  }
  const onTimerReset = () => {
    dispatch(resetTimer())
  }

  const onResetGame = () => {
    const newNumbersArray = generateInitialArray(size);

    dispatch(newGame(newNumbersArray))
    onTimerReset();
  };

  const onPauseGame = () => {
    dispatch(pauseGame())
  }

  useEffect(() => {
    let interval = null;
    if (!isPaused && !hasWon) {
      interval = setInterval(() => {
        onTimerUpdate();
      }, 1000);
    } else if (isPaused && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const clickHandler = useCallback(
    event => {
      const currentIndex = numberArray.findIndex(
        el => el === +event.target.innerText,
      );
      const emptyIndex = numberArray.findIndex(el => el === 0);

      if (hasNeighbourEmptyCell(currentIndex, emptyIndex, size)) {
        let newArr = [...numberArray];
        newArr[emptyIndex] = newArr[currentIndex];
        newArr[currentIndex] = 0;

        dispatch(changePosition(newArr));
        if (isPaused) {
          onPauseGame();
        }
      }
    },
    [isPaused, pauseGame, numberArray],
  );

  // creating blocks
  const blocks = numberArray.map((item, i) => {
    const col = Math.floor(i / size);
    const row = i % size;
    const left = (row * 385) / size + 15 + 'px';
    const top = (col * 385) / size + 15 + 'px';
    const width = 400 / size - 18;

    return (
      item !== 0 && (
        <Block
          fontSize={(width * 2.5) / 5 + 'px'}
          onClick={clickHandler}
          width={width + 'px'}
          number={item}
          left={left}
          key={`${item}`}
          top={top}
        />
      )
    );
  });

  return (
    <div className="puzzle-root">
      <h1>15 Puzzle</h1>
      <PuzzleSizes />
      <InfoBar steps={steps} time={time} />
      <div className="puzzle">
        {hasWon && (
          <Backdrop
            pauseGame={onPauseGame}
            resetGame={onResetGame}
            steps={steps}
            seconds={time}
          />
        )}
        {blocks}
      </div>
      {!hasWon && (
        <div className="btnWrap">
          <Button className="resetBtn" onClick={onResetGame}>
            Reset
          </Button>
          <Button className="resetBtn" onClick={onPauseGame}>
            {isPaused ? 'Resume' : 'Pause'}
          </Button>
        </div>
      )}
    </div>
  );
};


export default Puzzle;
