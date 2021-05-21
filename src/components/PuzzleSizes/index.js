import { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/action';
import RadioInput from './RadioInput';

import './style.scss';

const sizes = ['4', '5', '6'];

const PuzzleSizes = ({ onSizeChange }) => {
  const [input, setInput] = useState('4');

  const handleChange = useCallback(
    ({ target: { value } }) => {
      setInput(value);
      onSizeChange(+value);
    },
    [onSizeChange],
  );

  return (
    <div className="sizeSelect">
      {sizes.map(size => (
        <RadioInput
          size={size}
          onChange={handleChange}
          checked={size === input}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSizeChange: size => dispatch(actions.sizeChange(size)),
  };
};

export default connect(null, mapDispatchToProps)(PuzzleSizes);
