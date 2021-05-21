import { memo, useCallback } from 'react';

import { hasNeighbourEmptyCell } from '../../utils/helpers';
import PuzzleWrap from './PuzzleWrap';
import Block from '../Block';

import './style.scss';

const Puzzle = ({
  changePosition,
  numberArray,
  pauseGame,
  isPaused,
  steps,
  size,
}) => {
  // handle click
  const clickHandler = useCallback(
    event => {
      let currentIndex = numberArray.findIndex(
        el => el === +event.target.innerText,
      );
      let emptyIndex = numberArray.findIndex(el => el === 0);

      if (hasNeighbourEmptyCell(currentIndex, emptyIndex, size)) {
        changePosition(currentIndex, emptyIndex);
        if (isPaused) {
          pauseGame();
        }
      }
    },
    [isPaused, pauseGame, numberArray],
  );

  // creating blocks
  let blocks = numberArray.map((item, i) => {
    let col = Math.floor(i / size);
    let row = i % size;
    let left = (row * 385) / size + 15 + 'px';
    let top = (col * 385) / size + 15 + 'px';
    let width = 400 / size - 18;

    return (
      item !== 0 && (
        <Block
          fontSize={(width * 2.5) / 5 + 'px'}
          clicked={clickHandler}
          width={width + 'px'}
          number={item}
          left={left}
          key={item}
          top={top}
        />
      )
    );
  });

  return (
    <PuzzleWrap pauseGame={pauseGame} steps={steps}>
      {blocks}
    </PuzzleWrap>
  );
};

export default memo(Puzzle);
