import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocale } from '../actions/localeActions'

const LocalePicker = props => {
    const localeState = useSelector(state => state.LocaleReducer);
    const dispatch = useDispatch();
    return (
        <>
            <span>{localeState.locale}</span>
            <button onClick={() => dispatch(setLocale('en'))}>English</button>
            <button onClick={() => dispatch(setLocale('es'))}>Spanish</button>
        </>
    )

}

export default LocalePicker;