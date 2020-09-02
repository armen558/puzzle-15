import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/action';

import './style.scss'

const RadioBtn = props => {

    const [state, setState] = useState({ input: '4' })

    const handleChange = (event) => {
        let value = event.target.value;
        setState({ input: value });
        props.onSizeChange(+value);
    }

    return (
        <div className="sizeSelect">
            <input
                id="choice4"
                type="radio"
                name="size"
                value="4"
                checked={state.input === '4'}
                onChange={handleChange}
            />
            <label htmlFor="choice4">4×4</label>
            <input
                id="choice5"
                type="radio"
                name="size"
                value="5"
                checked={state.input === '5'}
                onChange={handleChange}
            />
            <label htmlFor="choice5">5×5</label>
            <input
                id="choice6"
                type="radio"
                name="size"
                value="6"
                checked={state.input === '6'}
                onChange={handleChange}
            />
            <label htmlFor="choice6">6×6</label>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSizeChange: (size) => dispatch(actions.sizeChange(size))
    }
}

export default connect(null, mapDispatchToProps)(RadioBtn);