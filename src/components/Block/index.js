import React from 'react';

import './style.css'

const Block = (props) => {
    return (
        <div 
            className="block" 
            onClick={props.clicked}
            style={{
                fontSize: props.fontSize,
                height: props.width,
                left: props.left, 
                lineHeight: props.width,
                top: props.top,
                width: props.width,
            }}
        >
            {props.number}
        </div>
    )
}

export default Block;