const ThemeReducer = (state, action) => {
    switch(action.type){
        case "CHANGE_THEME":
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