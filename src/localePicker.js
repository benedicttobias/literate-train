import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const LocalePicker = props => {
    const localeState = useSelector(state => state.LocaleReducer);
    const dispatch = useDispatch();
    return (
        <>
            <span>{localeState.locale}</span>
            <button onClick={() => dispatch({type: 'SET_LOCALE', payload: 'en'})}>English</button>
            <button onClick={() => dispatch({type: 'SET_LOCALE', payload: 'es'})}>Spanish</button>
        </>
    )

}

export default LocalePicker;