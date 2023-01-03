
import themeReducer from '../features/theme'
import freelancesReducer from '../features/freelances'
import freelanceReducer from '../features/freelance'
import surveyReducer from '../features/survey'
import resultsReducer from '../features/results'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        freelances: freelancesReducer,
        freelance: freelanceReducer,
        survey: surveyReducer,
        results: resultsReducer,
    },
    middleware: [
        ...getDefaultMiddleware(),
    ]
})

export default store