import { memo } from 'react';

import { timeFormat } from '../../utils/helpers';

import './style.scss';

const TimeTrack = ({ seconds }) => {
  return <div className="timer">Time: {timeFormat(seconds)}</div>;
};

export default memo(TimeTrack);
