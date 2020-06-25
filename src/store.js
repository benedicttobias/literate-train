import { createStore, applyMiddleware , combineReducers } from 'redux';
import ThemeReducer from './reducers/themeReducer';
import logger from 'redux-logger';
import LocaleReducer from './reducers/localeReducer';
import thunk from 'redux-thunk';

const Store = createStore(
    combineReducers({
        ThemeReducer,
        LocaleReducer
    }), 
    {}, // initial states 
    applyMiddleware(logger, thunk)
);

export default Store;