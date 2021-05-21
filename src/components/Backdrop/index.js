import { useEffect, memo } from 'react';

import { timeFormat } from '../../utils/helpers';
import Button from '../Button/index';

import './style.scss';

const Backdrop = ({ seconds, steps, resetGame, pauseGame }) => {
  useEffect(() => {
    pauseGame();
  }, []);

  return (
    <div className="backdrop">
      <div className="congrats">
        YOU WON!
        <p>{'Time: ' + timeFormat(seconds)}</p>
        <p>{'Steps: ' + steps}</p>
      </div>
      <Button class="newGameBtn" onButtonClick={resetGame}>
        New game
      </Button>
    </div>
  );
};

export default memo(Backdrop);
