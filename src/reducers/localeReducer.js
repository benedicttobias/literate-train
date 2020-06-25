const LocaleReducer = (state = {
    locale: 'en'
}, action) => {
    switch(action.type){
        case "SET_LOCALE":
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