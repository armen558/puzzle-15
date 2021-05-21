import { memo } from 'react';

import './style.scss';

const RadioInput = ({ checked, onChange, size }) => {
  return (
    <>
      <input
        id={`choice${size}`}
        type="radio"
        name="size"
        value={size}
        checked={checked}
        onChange={onChange}
        className="radioInput"
      />
      <label
        htmlFor={`choice${size}`}
        className="radioInputLabel"
      >{`${size}x${size}`}</label>
    </>
  );
};

export default memo(RadioInput);
