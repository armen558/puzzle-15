import React from 'react';

import './style.scss'

const Button = (props) => {
    return (
        <button 
            className={props.class}
            onClick={props.onButtonClick}
        >
            {props.children}
        </button>
    )
}

export default Button;
