import React from 'react';

import { timeFormat } from '../../helpers/timeFormat';

import './style.scss';

const TimeTrack = props => {
    return (
        <div className="timer">
            Time: {timeFormat(props.seconds)}
        </div>
    )
};

export default TimeTrack;