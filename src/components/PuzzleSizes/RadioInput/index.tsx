import { memo } from 'react';

import './style.scss';

const RadioInput = ({ checked, onChange, size }) => {
  return (
    <label className="radioInputLabel">
      <input
        id={`choice${size}`}
        type="radio"
        name="size"
        value={size}
        checked={checked}
        onChange={onChange}
        className="radioInput"
      />

      {`${size}x${size}`}
    </label>
  );
};

export default memo(RadioInput);
