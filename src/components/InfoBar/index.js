import { memo } from 'react';

import StepsCount from '../StepsCount';
import Timer from '../Timer';

const InfoBar = ({ time, steps }) => {
  return (
    <div className="flex">
      <Timer seconds={time} />
      <StepsCount stepsCount={steps} />
    </div>
  );
};

export default memo(InfoBar);
