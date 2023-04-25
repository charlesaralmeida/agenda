import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    showMessage: false,
    showError: false,
    message: {
        title: '',
        text: '',
    },
}

export const slice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleShowMessage(state, { payload }) {
            let toggleShowState = state.showMessage ? false : true
            return {
                ...state,
                showMessage: toggleShowState,
                message: {
                    title: payload.TITLE,
                    text: payload.TEXT,
                },
            }
        },
        toggleShowError(state, { payload }) {
            let toggleShowState = state.showError ? false : true
            return {
                ...state,
                showError: toggleShowState,
                message: {
                    title: payload.TITLE,
                    text: payload.TEXT,
                },
            }
        },
    },
})

export const { toggleShowMessage, toggleShowError } = slice.actions

export const getStateModal = (state) => state.modal

export default slice.reducer
