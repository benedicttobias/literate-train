import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setTheme } from '../actions/themeActions';

const ThemePicker = props => {
    const themeState = useSelector(state => state.ThemeReducer, shallowEqual);
    const themeDispatch = useDispatch();

return (
    <>
        <span>{themeState.theme}</span>
        <button onClick={() => themeDispatch(setTheme('light'))}>Light</button>
        <button onClick={() => themeDispatch(setTheme('dark'))}>Dark</button>
    </>
)
}

export default ThemePicker;