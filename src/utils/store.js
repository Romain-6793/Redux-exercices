
import themeReducer from '../features/theme'
import freelancesReducer from '../features/freelances'
import freelanceReducer from '../features/freelance'
import surveyReducer from '../features/survey'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        freelances: freelancesReducer,
        freelance: freelanceReducer,
        survey: surveyReducer,
    }
})

export default store