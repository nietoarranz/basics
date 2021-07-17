import { configureStore } from '@reduxjs/toolkit'
import EuropeCapitals from './slices/EuropeCapitals'

export default configureStore({
    reducer: {
        europeCapitals: EuropeCapitals,
    },
})