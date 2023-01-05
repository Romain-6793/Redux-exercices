
//ATTENTION : La présence de currentTheme a modifié l'exemple par rapport au cours.


import { createSlice } from "@reduxjs/toolkit"

// On utilise des variables pour les noms des actions
// pour éviter les fautes de frappe

const { actions, reducer } = createSlice({
    name: "theme",
    initialState: {
        currentTheme: "light",
    },
    reducers: {
        toggle: (state) => {
            const newTheme = state.currentTheme === 'light' ? 'dark' : 'light'
            return { ...state, currentTheme: newTheme }
        },
        set: (state, action) => {
            const newState = { ...state, currentTheme: action.payload };
            return newState;
        },
        // reset : () => {
        //     return "light"
        // },
    },
})

export const { toggle, set } = actions

export default reducer




