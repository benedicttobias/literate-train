import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setTheme } from '../actions/themeActions';
import Label from '../components/label';

const ThemePicker = props => {
    const themeState = useSelector(state => state.ThemeReducer, shallowEqual);
    const themeDispatch = useDispatch();

return (
    <>
        <Label text={themeState.theme} />
        <button onClick={() => themeDispatch(setTheme('light'))}>Light</button>
        <button onClick={() => themeDispatch(setTheme('dark'))}>Dark</button>
    </>
)
}

export default ThemePicker;