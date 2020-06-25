import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const logger = (store) => (next) => (action) => {
    console.log("Store received action", action);
    next(action);
};

const Store = createStore(reducers, {
    theme: 'light',
    brightness: '100'
}, applyMiddleware(logger));

Store.subscribe(() => {
    console.log("store updated", Store.getState())
})

export default Store;