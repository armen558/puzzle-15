import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Backdrop from '../../Backdrop';
import Button from '../../Button';
import RadioBtn from '../../RadioBtn';
import StepsCount from '../../StepsCount';
import TimeTrack from '../../Timer';
import * as actions from '../../../actions/action';
import { checkArray } from '../../../helpers/checkArray';

import './style.scss'

const PuzzleWrap = props => {

    let hasWon = checkArray(props.numberArray);

    useEffect(() => {
        let interval = null;
        if(!props.isPaused && !hasWon) {
            interval = setInterval(() => {
                props.onTimerUpdate();
            }, 1000)
        } else if (props.isPaused && props.time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [props.isPaused])
    

    const resetHandler = () => {
        props.onResetGame(props.size);
        props.onTimerReset();
    }

    return (
        <div className="container">
            <h1>15 Puzzle</h1>
            <RadioBtn />
            <div className="flex">
                <TimeTrack seconds={props.time}/>
                <StepsCount stepsCount={props.steps}/>
            </div>
            <div className="puzzle">    
                {hasWon ? (
                    <Backdrop
                        pauseGame={props.pauseGame}
                        resetGame={resetHandler} 
                        steps={props.steps}
                        seconds={props.time}    
                    />
                ) : null}           
                {props.children}
            </div>
            {
                !hasWon ? (
                <div className="btnWrap">
                <Button
                    class="resetBtn"
                    onButtonClick={resetHandler}
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

const mapStateToProps = state => {
    return {
        size: state.size,
        isPaused: state.isPaused,
        numberArray: state.numbers,
        time: state.time
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onResetGame: size => dispatch(actions.resetGame(size)),
        onTimerUpdate: () => dispatch(actions.timerUpdate()),
        onTimerReset: () => dispatch(actions.timerReset()),
        onGamePause: () => dispatch(actions.pauseGame())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleWrap);
