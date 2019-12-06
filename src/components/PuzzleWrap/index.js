import React from 'react';

import Backdrop from '../Backdrop/';
import Button from '../Button';
import RadioBtn from '../RadioBtn/';
import StepsCount from '../StepsCount/';
import TimeTrack from '../Timer';
import './style.css'


const PuzzleWrap = props => {
    return (
        <div className="container">
            <h1>15 Puzzle</h1>
            <RadioBtn onChange={props.sizeSelect}/>
            <div className="flex">
                <TimeTrack seconds={props.seconds}/>
                <StepsCount stepsCount={props.steps}/>
            </div>
            <div className="puzzle">    
                {props.win ? (
                    <Backdrop
                        pauseGame={props.pauseGame}
                        resetGame={() => props.resetGame(props.size)} 
                        steps={props.steps}
                        seconds={props.seconds}    
                    />
                ) : null}           
                {props.children}
            </div>
            {
                !props.hasWon ? (
                <div className="btnWrap">
                <Button
                    class="resetBtn"
                    onButtonClick={props.resetGame}
                >
                    Reset
                </Button>
                <Button
                    class="resetBtn"
                    onButtonClick={props.pauseGame}
                >
                    {props.isPaused ? 'Resume' : 'Pause'}
                </Button>
                </div>
                ) : null
            }
        </div>
    )
}

export default PuzzleWrap;