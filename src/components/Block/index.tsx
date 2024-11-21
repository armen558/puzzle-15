import { memo } from 'react';

import './style.scss';

const Block = ({ onClick, width, left, top, fontSize, number }) => {
  return (
    <div
      className="block"
      onClick={onClick}
      style={{
        fontSize: fontSize,
        height: width,
        left: left,
        lineHeight: width,
        '--top': top,
        width: width,
      }}
    >
      {number}
    </div>
  );
};

export default memo(Block);
