import { createStore, applyMiddleware , combineReducers } from 'redux';
import ThemeReducer from './reducers/themeReducer';
import logger from 'redux-logger';
import LocaleReducer from './reducers/localeReducer';

const Store = createStore(
    combineReducers({
        ThemeReducer,
        LocaleReducer
    }), 
    {}, // initial states 
    applyMiddleware(logger));

export default Store;