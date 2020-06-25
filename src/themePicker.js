import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

const ThemePicker = props => {
    const themeState = useSelector(state => state.ThemeReducer, shallowEqual);
    const themeDispatch = useDispatch();

return (
    <>
        <span>{themeState.theme}</span>
        <button onClick={() => themeDispatch({type:'SET_THEME', payload: 'light'})}>Light</button>
        <button onClick={() => themeDispatch({type:'SET_THEME', payload: 'dark'})}>Dark</button>
    </>
)
}

export default ThemePicker;