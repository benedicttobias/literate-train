import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

let ThemePicker = props => {
    const store = props.store;
    const [theme, setTheme] = useState(store.getState().theme);

    useEffect(() => {
        setTheme(store.getState().theme);
    }, [store.getState().theme]);

    return (
        <>
            <span>{theme}</span>
            <button onClick={() => store.dispatch({type: 'CHANGE_THEME', payload: 'light'})}>Light</button>
            <button onClick={() => store.dispatch({type: 'CHANGE_THEME', payload: 'dark'})}>Dark</button>
        </>
    )
}

ThemePicker = connect()(ThemePicker);

export default ThemePicker;