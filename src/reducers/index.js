export default (state, action) => {
    switch(action.type){
        case "CHANGE_THEME":
            if (action.payload === 'light'){
                state.theme = 'light';
            } else if (action.payload === 'dark'){
                state.theme = 'dark';
            }
            break;
        default:
            break;
    }
    
    return state;
}