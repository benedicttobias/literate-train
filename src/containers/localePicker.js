import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocale } from '../actions/localeActions'
import Label from '../components/label';

const LocalePicker = props => {
    const localeState = useSelector(state => state.LocaleReducer);
    const dispatch = useDispatch();
    return (
        <>
            <Label text={localeState.locale} />
            <button onClick={() => dispatch(setLocale('en'))}>English</button>
            <button onClick={() => dispatch(setLocale('es'))}>Spanish</button>
        </>
    )

}

export default LocalePicker;