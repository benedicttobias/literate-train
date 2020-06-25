import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

const Store = createStore(reducers, {
    theme: 'light',
    brightness: '100'
}, applyMiddleware(logger));

Store.subscribe(() => {
    console.log("store updated", Store.getState())
})

export default Store;