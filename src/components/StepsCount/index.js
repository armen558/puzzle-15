import React from 'react';

import './style.css'

const StepsCount = (props) => {
    return (
        <div className="steps">Steps: {props.stepsCount}</div>
    )
}

export default StepsCount;