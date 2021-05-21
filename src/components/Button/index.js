import { memo } from 'react';

import './style.scss';

const Button = ({ rootClass, onButtonClick, children }) => {
  return (
    <button className={rootClass} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default memo(Button);
