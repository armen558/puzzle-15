import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { checkArray } from '../../../utils/helpers';
import * as actions from '../../../actions/action';
import PuzzleSizes from '../../PuzzleSizes';
import Backdrop from '../../Backdrop';
import InfoBar from '../../InfoBar';
import Button from '../../Button';

import './style.scss';

const PuzzleWrap = ({
  onTimerUpdate,
  onTimerReset,
  onResetGame,
  numberArray,
  pauseGame,
  children,
  isPaused,
  steps,
  time,
  size,
}) => {
  let hasWon = checkArray(numberArray);

  useEffect(() => {
    let interval = null;
    if (!isPaused && !hasWon) {
      interval = setInterval(() => {
        onTimerUpdate();
      }, 1000);
    } else if (isPaused && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const resetHandler = useCallback(() => {
    onResetGame(size);
    onTimerReset();
  }, [onTimerReset, onResetGame, size]);

  return (
    <div className="puzzle-root">
      <h1>15 Puzzle</h1>
      <PuzzleSizes />
      <InfoBar steps={steps} time={time} />
      <div className="puzzle">
        {hasWon && (
          <Backdrop
            pauseGame={pauseGame}
            resetGame={resetHandler}
            steps={steps}
            seconds={time}
          />
        )}
        {children}
      </div>
      {!hasWon && (
        <div className="btnWrap">
          <Button rootClass="resetBtn" onButtonClick={resetHandler}>
            Reset
          </Button>
          <Button rootClass="resetBtn" onButtonClick={pauseGame}>
            {isPaused ? 'Resume' : 'Pause'}
          </Button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    size: state.size,
    isPaused: state.isPaused,
    numberArray: state.numbers,
    time: state.time,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onResetGame: size => dispatch(actions.resetGame(size)),
    onTimerUpdate: () => dispatch(actions.timerUpdate()),
    onTimerReset: () => dispatch(actions.timerReset()),
    onGamePause: () => dispatch(actions.pauseGame()),
  };
};

PuzzleWrap.propTypes = {
  isPaused: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleWrap);
