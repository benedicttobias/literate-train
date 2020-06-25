import React, { useState } from 'react';
import {connect} from 'react-redux';

let ThemePicker = props => {
    const store = props.store;
    const [theme] = useState(store.getState().theme);

    return (
        <>
            <span>{theme}</span>
            <button onClick={() => store.dispatch({type: 'SET_THEME', payload: 'light'})}>Light</button>
            <button onClick={() => store.dispatch({type: 'SET_THEME', payload: 'dark'})}>Dark</button>
        </>
    )
}

ThemePicker = connect()(ThemePicker);

export default ThemePicker;