import { createSlice } from '@reduxjs/toolkit'
import { PAGES, PROGRESS_RATE } from '../../utils/constants'

let fundList = [
    'CO 4250 - CL 0170',
    'CO 4250 - CL 0171',
    'CO 4250 - CL 0172',
    'CO 4250 - CL 0173',
]

export const initialState = {
    progress: 0,
    currentPage: PAGES.TRANSPORT_TYPE,
    transportType: null,
    vehicleType: null,
    busType: null,
    boardingInfo: {
        date: new Date().toString(),
        time: new Date().toString(),
        uf: 'SP',
        city: 'Campinas',
        adress: '',
        reference: '',
    },
    intermediateDestinationInfo: {
        editing: {
            uf: 'SP',
            city: 'Campinas',
            adress: '',
            reference: '',
            estimatedTimeType: 'Horas',
            estimatedTime: 'Tue Sep 13 2022 00:00:00 GMT-0300 (GMT-03:00)',
            estimatedDays: '0',
        },
        destinationsList: [],
        warned: false,
    },
    finalDestinationInfo: {
        uf: 'SP',
        city: 'Campinas',
        adress: '',
        reference: '',
    },
    passengersInfo: {
        editing: {
            vinculo: '',
            name: '',
            documentType: 'Matricula',
            documentNumber: '',
            phone: '',
        },
        passengersList: [],
        warned: false,
    },
    responsavelInfo: {
        editing: {
            vinculo: '',
            name: '',
            documentType: 'Matricula',
            documentNumber: '',
            phone: '',
        },
        responsavelList: [],
        warned: false,
    },
    passengersSheetList: [],
    otherInfo: {
        fund: 0,
        editing: {
            fundText: fundList[0],
            return: false,
            returnDate: null,
            returnTime: null,
            retiradaDate: null,
            devolucaoDate: null,
            tripReason: '',
            other: '',
        },
        fundList: fundList,
    },
}

export const slice = createSlice({
    name: 'agendar',
    initialState,
    reducers: {
        incrementProgress(state) {
            return {
                ...state,
                progress: state.progress + PROGRESS_RATE,
            }
        },
        decrementProgress(state) {
            return {
                ...state,
                progress: state.progress - PROGRESS_RATE,
            }
        },
        setPage(state, { payload }) {
            return {
                ...state,
                currentPage: payload,
            }
        },
        setTransportType(state, { payload }) {
            return {
                ...state,
                transportType: payload,
            }
        },
        setVehicleType(state, { payload }) {
            return {
                ...state,
                vehicleType: payload,
            }
        },
        setBusType(state, { payload }) {
            return {
                ...state,
                busType: payload,
            }
        },
        setBoardingInfo(state, { payload }) {
            return {
                ...state,
                boardingInfo: {
                    ...state.boardingInfo,
                    [payload.key]: payload.value,
                },
            }
        },
        setIntermediateDestinationInfo(state, { payload }) {
            return {
                ...state,
                intermediateDestinationInfo: {
                    ...state.intermediateDestinationInfo,
                    editing: {
                        ...state.intermediateDestinationInfo.editing,
                        [payload.key]: payload.value,
                    },
                },
            }
        },
        setIntermediateDestinationWarned(state) {
            return {
                ...state,
                intermediateDestinationInfo: {
                    ...state.intermediateDestinationInfo,
                    warned: true,
                },
            }
        },
        addIntermediateDestination: (state, { payload }) => {
            return {
                ...state,
                intermediateDestinationInfo: {
                    editing: initialState.intermediateDestinationInfo.editing,
                    destinationsList: payload,
                },
            }
        },
        removeIntermediateDestination: (state, { payload }) => {
            return {
                ...state,
                intermediateDestinationInfo: {
                    editing: state.intermediateDestinationInfo.editing,
                    destinationsList: payload,
                },
            }
        },
        setFinalDestinationInfo(state, { payload }) {
            return {
                ...state,
                finalDestinationInfo: {
                    ...state.finalDestinationInfo,
                    [payload.key]: payload.value,
                },
            }
        },
        setPassengersInfo(state, { payload }) {
            return {
                ...state,
                passengersInfo: {
                    ...state.passengersInfo,
                    editing: {
                        ...state.passengersInfo.editing,
                        [payload.key]: payload.value,
                    },
                },
            }
        },
        setPassengersWarned(state) {
            return {
                ...state,
                passengersInfo: {
                    ...state.passengersInfo,
                    warned: true,
                },
            }
        },
        addPassengers: (state, { payload }) => {
            return {
                ...state,
                passengersInfo: {
                    editing: initialState.passengersInfo.editing,
                    passengersList: payload,
                },
            }
        },
        removePassengers: (state, { payload }) => {
            return {
                ...state,
                passengersInfo: {
                    editing: state.passengersInfo.editing,
                    passengersList: payload,
                },
            }
        },
        setResponsavelInfo(state, { payload }) {
            return {
                ...state,
                responsavelInfo: {
                    ...state.responsavelInfo,
                    editing: {
                        ...state.responsavelInfo.editing,
                        [payload.key]: payload.value,
                    },
                },
            }
        },
        addResponsavel(state, { payload }) {
            return {
                ...state,
                responsavelInfo: {
                    editing: initialState.responsavelInfo.editing,
                    responsavelList: payload,
                },
            }
        },
        setResponsavelWarned(state) {
            return {
                ...state,
                responsavelInfo: {
                    ...state.responsavelInfo,
                    warned: true,
                },
            }
        },
        removeResponsavel(state, { payload }) {
            return {
                ...state,
                responsavelInfo: {
                    editing: state.responsavelInfo.editing,
                    responsavelList: payload,
                },
            }
        },
        setPassengerSheetList(state, { payload }) {
            return {
                ...state,
                passengersSheetList: payload,
            }
        },
        setOtherInfo(state, { payload }) {
            if (payload.key === 'fund') {
                return {
                    ...state,
                    otherInfo: {
                        ...state.otherInfo,
                        fund: payload.value,
                    },
                }
            } else
                return {
                    ...state,
                    otherInfo: {
                        ...state.otherInfo,
                        editing: {
                            ...state.otherInfo.editing,
                            [payload.key]: payload.value,
                        },
                    },
                }
        },
    },
})

export const {
    incrementProgress,
    decrementProgress,
    setPage,
    setTransportType,
    setVehicleType,
    setBusType,
    setBoardingInfo,
    setIntermediateDestinationInfo,
    setIntermediateDestinationWarned,
    addIntermediateDestination,
    removeIntermediateDestination,
    setFinalDestinationInfo,
    setPassengersInfo,
    setPassengersWarned,
    addPassengers,
    removePassengers,
    setResponsavelInfo,
    addResponsavel,
    removeResponsavel,
    setResponsavelWarned,
    setPassengerSheetList,
    setOtherInfo,
} = slice.actions

export const getState = (state) => state.agendar
export const getBoardingInfo = (state) => state.agendar.boardingInfo
export const getIntermediateDestinationInfo = (state) =>
    state.agendar.intermediateDestinationInfo
export const getFinalDestinationInfo = (state) =>
    state.agendar.finalDestinationInfo
export const getPassengersInfo = (state) => state.agendar.passengersInfo
export const getResponsavelInfo = (state) => state.agendar.responsavelInfo
export const getOtherInfo = (state) => state.agendar.otherInfo
export const getVehicleType = (state) => state.agendar.vehicleType
export const getTransportType = (state) => state.agendar.transportType
export const getPassengerSheetList = (state) =>
    state.agendar.passengersSheetList

export default slice.reducer
