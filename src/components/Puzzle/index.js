import React from 'react';


import Block from '../Block';
import PuzzleWrap from './PuzzleWrap';

import './style.scss';

const Puzzle = props => {

    // handle click
    const clickHandler = (event) => {
        let currentIndex = props.numberArray.findIndex(el => el === +event.target.innerText);
        let emptyIndex = props.numberArray.findIndex(el => el === 0);

        if ((currentIndex + 1 === emptyIndex && emptyIndex % props.size !== 0)
            || (currentIndex - 1 === emptyIndex && (emptyIndex + 1) % props.size !== 0)
            || currentIndex + props.size === emptyIndex
            || currentIndex - props.size === emptyIndex) {

            props.changePosition(currentIndex, emptyIndex);

            if (props.isPaused) {
                props.pauseGame();
            }
        }

    };

    // creating blocks
    let blocks = props.numberArray.map((item, i) => {
        let col = Math.floor(i / props.size);
        let row = i % props.size;
        let left = (row * 385 / props.size) + 15 + 'px';
        let top = (col * 385 / props.size) + 15 + 'px';
        let width = 400 / props.size - 18;

        return item !== 0 && (
            <Block
                clicked={clickHandler}
                fontSize={width * 2.5 / 5 + 'px'}
                key={item}
                number={item}
                left={left}
                top={top}
                width={width + 'px'}
            />
        );
    });

    return (
        <PuzzleWrap
            pauseGame={props.pauseGame}
            steps={props.steps}
        >
            {blocks}
        </PuzzleWrap>
    )
};

export default Puzzle;
