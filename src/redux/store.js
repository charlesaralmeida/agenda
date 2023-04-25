import { configureStore } from '@reduxjs/toolkit'
import agendarReducer from './slices/agendar'
import modalReducer from './slices/modal'

export default configureStore({
    reducer: {
        agendar: agendarReducer,
        modal: modalReducer,
    },
})
