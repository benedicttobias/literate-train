import { createStore } from 'redux';
import reducers from './reducers';

const Store = createStore(reducers, {
    theme: 'light',
    brightness: '100'
})

Store.subscribe(() => {
    console.log("store updated", Store.getState())
})

export default Store;