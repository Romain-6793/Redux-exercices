
//ATTENTION : La présence de currentTheme a modifié l'exemple par rapport au cours.


import { createAction, createReducer } from "@reduxjs/toolkit"

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

export default createReducer(initState, (builder) => {
    return builder
        .addCase(toggleTheme, (state) => {
            const newTheme = state.currentTheme === 'light' ? 'dark' : 'light'
            return { ...state, currentTheme: newTheme }
        })
        .addCase(setTheme, (state, action) => {
            const newState = { ...state, currentTheme: action.payload };
            return newState;
        })

})


