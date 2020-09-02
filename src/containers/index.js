import { connect } from 'react-redux';

import Puzzle from '../components/Puzzle';

import { changePosition, resetGame, sizeChange, pauseGame } from '../actions/action';

const mapStateToProps = (state) => {
    return {
        size: state.size,
        numberArray: state.numbers,
        steps: state.steps,
        isPaused: state.isPaused
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changePosition: (currentIndex, emptyIndex) => dispatch(changePosition({currentIndex, emptyIndex})),
        pauseGame: () => dispatch(pauseGame())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle);