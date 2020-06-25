const LocaleReducer = (state = {
    locale: 'en'
}, action) => {
    switch(action.type){
        case "SET_LOCALE_FULFILLED": // '_FULFILLED' appended here because of using redux-promise-middleware 
            state = {
                ...state,
                locale: action.payload
            }
            break;
        default:
            break;
    }
    
    return state;
}

export default LocaleReducer;