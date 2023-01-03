
import { createAction } from "@reduxjs/toolkit"

// On utilise des variables pour les noms des actions
// pour éviter les fautes de frappe


const initState = {
    currentTheme: 'light',
}
// action creators

export const toggleTheme = createAction('theme/toggle')

export const setTheme = createAction('theme/set')

// setTheme('light')

// Le reducer
// on utilise une valeur par défaut pour donner le state initial
export default function reducer(state = initState, action) {
    if (action.type === toggleTheme.toString()) {
        const newTheme = state.currentTheme === 'light' ? 'dark' : 'light'
        return { ...state, currentTheme: newTheme }
    }
    if (action.type === setTheme.toString()) {
        const newState = { ...state, currentTheme: action.payload };
        return newState;
    }
    return state
}