import React, { useState, useEffect } from 'react';

import Block from '../Block';
import { checkArray } from "../../helpers/checkArray";
import PuzzleWrap from '../PuzzleWrap';

import './style.css';
 
const Puzzle = props => {

    const [seconds, setSeconds] = useState(0);

    let hasWon = checkArray(props.numberArray);

    useEffect (() => {
        let radioBtns = document.querySelectorAll('input[type="radio"]');
        radioBtns.forEach((el) => {
            if(el.checked) {
                props.sizeChange(+el.value)
            };
            return
        })
    }, []);

    useEffect(() => {
        let interval = null;
        if(!props.isPaused && !hasWon) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000)
        } else if (props.isPaused && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [props.isPaused])
    

    // handle click
    const clickHandler = (event) => {
        let currentIndex = props.numberArray.findIndex( el => el === +event.target.innerText);
        let emptyIndex = props.numberArray.findIndex(el => el === 0);

        if ((currentIndex + 1 === emptyIndex &&  emptyIndex % props.size !== 0) 
            || (currentIndex - 1 === emptyIndex &&  (emptyIndex + 1) % props.size !== 0)
            || currentIndex + props.size === emptyIndex 
            || currentIndex - props.size === emptyIndex) {

                props.changePosition(currentIndex, emptyIndex);
        }
        if(props.isPaused) {
            props.pauseGame();
        }

    };

    const sizeSelectHandler = event => {
        props.sizeChange(+event.target.value);
    }
    
    // creating blocks
    let blocks = props.numberArray.map((item, i) => {
        let col = Math.floor(i / props.size);
        let row = i % props.size;
        let left = (row * 385 / props.size) + 15 + 'px';
        let top = (col * 385 / props.size) + 15 + 'px';
        let width = 400 / props.size - 18;
        if (item !== 0) {
            return (
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
        }
        return null
    });

    return (
        <PuzzleWrap
            isPaused={props.isPaused}
            pauseGame={props.pauseGame}
            resetGame={props.resetGame} 
            seconds={seconds}
            sizeSelect={sizeSelectHandler}
            steps={props.steps} 
            win={hasWon}
        >
            {blocks}            
        </PuzzleWrap>
    )
};

export default Puzzle;
