import { memo } from 'react';

import './style.scss';

const Block = ({ clicked, width, left, top, fontSize, number }) => {
  return (
    <div
      className="block"
      onClick={clicked}
      style={{
        fontSize: fontSize,
        height: width,
        left: left,
        lineHeight: width,
        top: top,
        width: width,
      }}
    >
      {number}
    </div>
  );
};

export default memo(Block);
