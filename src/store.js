import { createStore, applyMiddleware } from 'redux';
import ThemeReducer from './reducers/themeReducer';
import logger from 'redux-logger';

const Store = createStore(ThemeReducer, {
    theme: 'light',
    brightness: '100'
}, applyMiddleware(logger));

export default Store;