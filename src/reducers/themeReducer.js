const ThemeReducer = (state = {
    theme: 'light'
}, action) => {
    switch(action.type){
        case "SET_THEME":
            if (action.payload === 'light'){
                state = {
                    ...state,
                    theme: 'light'
                }
            } else if (action.payload === 'dark'){
                state = {
                    ...state,
                    theme: 'dark'
                }
            }
            break;
        default:
            break;
    }
    
    return state;
}

export default ThemeReducer;