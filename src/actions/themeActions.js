export function setTheme(theme) {
    return dispatch => {
        // Example 1: using thunk to simulate server call and dispatch afterward...
        setTimeout(() => {
            dispatch({
                type: "SET_THEME",
                payload: theme
            })
        }, 2000)
    }
}