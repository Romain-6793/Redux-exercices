// On utilise des variables pour les noms des actions
// pour éviter les fautes de frappe
const TOGGLE_THEME = 'theme/toggle'
const SET_THEME = 'theme/set'
const initState = {
    currentTheme: 'light',
}
// action creators

export const toggleTheme = () => ({ type: TOGGLE_THEME })

export const setTheme = (theme = 'light') => ({
    type: SET_THEME,
    payload: theme,
})

// Le reducer
// on utilise une valeur par défaut pour donner le state initial
export default function reducer(state = initState, action) {
    if (action.type === TOGGLE_THEME) {
        const newTheme = state.currentTheme === 'light' ? 'dark' : 'light'
        return { ...state, currentTheme: newTheme }
    }
    if (action.type === SET_THEME) {
        const newState = { ...state, currentTheme: action.payload };
        return newState;
    }
    return state
}