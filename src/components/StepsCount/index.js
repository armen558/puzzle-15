import React from 'react';

import './style.scss'

const StepsCount = (props) => {
    return (
        <div className="steps">Steps: {props.stepsCount}</div>
    )
}

export default StepsCount;