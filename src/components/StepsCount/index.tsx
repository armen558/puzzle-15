import { memo } from 'react';

import './style.scss';

const StepsCount = ({ stepsCount }) => {
  return <div className="steps">Steps: {stepsCount}</div>;
};

export default memo(StepsCount);
