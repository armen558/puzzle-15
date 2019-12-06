import React from 'react';

import Button from '../Button/index';
import { timeFormat } from '../../helpers/timeFormat';
import './style.css'


const Backdrop = props => {
    return (
        <div className="backdrop">
            <div className="congrats">
                YOU WON!
            <p>{'Time: ' + timeFormat(props.seconds)}</p>
            <p>{'Steps: ' + props.steps}</p>
            </div>
            <Button 
                class="newGameBtn"
                onButtonClick={props.resetGame}
            >New game</Button>
        </div>
    )
}

export default Backdrop;