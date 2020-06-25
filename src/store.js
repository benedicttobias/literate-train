import { createStore, applyMiddleware , combineReducers } from 'redux';
import ThemeReducer from './reducers/themeReducer';
import logger from 'redux-logger';
import LocaleReducer from './reducers/localeReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const Store = createStore(
    combineReducers({
        ThemeReducer,
        LocaleReducer
    }), 
    {}, // initial states 
    applyMiddleware(logger, thunk, promise)
);

export default Store;