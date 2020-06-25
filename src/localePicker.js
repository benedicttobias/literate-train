import React from 'react';

const LocalePicker = props => {
    const store = props.store;
    return (
        <>
            <button onClick={() => store.dispatch({type: 'SET_LOCALE', payload: 'en'})}>English</button>
            <button onClick={() => store.dispatch({type: 'SET_LOCALE', payload: 'es'})}>Spanish</button>
        </>
    )

}

export default LocalePicker;