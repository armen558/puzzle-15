import React from 'react';

import './style.css'

const RadioBtn = props => {
    return (
        <div className="sizeSelect">
            <input id="choice4" type="radio" name="size" value="4" defaultChecked onChange={props.onChange}/>
            <label htmlFor="choice4">4×4</label>
            <input id="choice5" type="radio" name="size" value="5" onChange={props.onChange}/>
            <label htmlFor="choice5">5×5</label>
            <input id="choice6" type="radio" name="size" value="6" onChange={props.onChange}/>
            <label htmlFor="choice6">6×6</label>
        </div>
    )
}

export default RadioBtn;