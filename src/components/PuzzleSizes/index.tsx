import { useCallback, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import RadioInput from './RadioInput';

import './style.scss';
import { AppDispatch, changeSize, resetTimer } from '../../store';

const sizes = ['4', '5', '6'];

const PuzzleSizes = () => {
  const [input, setInput] = useState('4');
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = useCallback(
    ({ target: { value } }) => {
      setInput(value);
      dispatch(changeSize(+value));
      dispatch(resetTimer());
    },
    [dispatch],
  );

  return (
    <div className="sizeSelect">
      {sizes.map(size => (
        <RadioInput
          key={size}
          size={size}
          onChange={handleChange}
          checked={size === input}
        />
      ))}
    </div>
  );
};

export default PuzzleSizes;
