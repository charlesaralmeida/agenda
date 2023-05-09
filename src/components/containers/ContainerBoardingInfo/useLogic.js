import { PAGES, VEHICLE_TYPE, TRANSPORT_TYPE, MESSAGES } from 'utils/constants'
import {
    incrementProgress,
    decrementProgress,
    setPage,
    setBoardingInfo,
    getBoardingInfo,
    getVehicleType,
    getTransportType,
    getPassengersInfo,
} from 'redux/slices/agendar'
import { toggleShowError } from 'redux/slices/modal'
import { useDispatch, useSelector } from 'react-redux'

const useLogic = () => {
    const boardingInfoState = useSelector(getBoardingInfo)
    const passengersInfoState = useSelector(getPassengersInfo)
    const vehicleType = useSelector(getVehicleType)
    const transportType = useSelector(getTransportType)

    const dispatch = useDispatch()

    const handleBackClick = () => {
        if (checkAdress()) {
            if (checkFields()) {
                dispatch(decrementProgress())
                if (transportType === TRANSPORT_TYPE.DOCUMENTO) {
                    //decrementa novamente porque pula escolha de veículo
                    dispatch(decrementProgress())
                    dispatch(setPage(PAGES.TRANSPORT_TYPE))
                } else if (vehicleType === VEHICLE_TYPE.ONIBUS)
                    dispatch(setPage(PAGES.BUS_TYPE))
                else dispatch(setPage(PAGES.VEHICLE_TYPE))
            } else
                dispatch(toggleShowError(MESSAGES.ERROR.BOARDING_FIELD_EMPTY))
        } else {
            dispatch(decrementProgress())
            if (transportType === TRANSPORT_TYPE.DOCUMENTO) {
                //decrementa novamente porque pula escolha de veículo
                dispatch(decrementProgress())
                dispatch(setPage(PAGES.TRANSPORT_TYPE))
            } else if (vehicleType === VEHICLE_TYPE.ONIBUS)
                dispatch(setPage(PAGES.BUS_TYPE))
            else dispatch(setPage(PAGES.VEHICLE_TYPE))
        }
    }

    const handleForwardClick = () => {
        if (checkAdress()) {
            if (checkFields()) {
                if (
                    transportType === TRANSPORT_TYPE.DOCUMENTO ||
                    transportType === TRANSPORT_TYPE.CARGA
                ) {
                    dispatch(incrementProgress())
                    dispatch(incrementProgress())
                    dispatch(setPage(PAGES.FINAL_DESTINATION_INFO))
                } else {
                    dispatch(incrementProgress())
                    dispatch(setPage(PAGES.INTERMEDIATE_DESTINATION_INFO))
                }
            } else
                dispatch(toggleShowError(MESSAGES.ERROR.BOARDING_FIELD_EMPTY))
        } else {
            if (
                transportType === TRANSPORT_TYPE.DOCUMENTO ||
                transportType === TRANSPORT_TYPE.CARGA
            ) {
                dispatch(incrementProgress())
                dispatch(incrementProgress())
                dispatch(setPage(PAGES.FINAL_DESTINATION_INFO))
            } else {
                dispatch(incrementProgress())
                dispatch(setPage(PAGES.INTERMEDIATE_DESTINATION_INFO))
            }
        }
    }

    const checkPassangersAdress = () => {
        if (passengersInfoState) {
            if (passengersInfoState.editing) {
                if (passengersInfoState.editing.endereco) {
                    if (passengersInfoState.editing.endereco === 'embarque') {
                        return true
                    }
                }
            }
        }
        return false
    }

    const checkFields = () => {
        return (
            boardingInfoState.date != '' &&
            boardingInfoState.date != 'Invalid Date' &&
            boardingInfoState.time != '' &&
            boardingInfoState.time != 'Invalid Date' &&
            boardingInfoState.uf != '' &&
            boardingInfoState.city != '' &&
            boardingInfoState.adress != ''
        )
    }

    const checkAdress = () => {
        return boardingInfoState.adress != ''
    }

    const handleChangeInfo = (key, value) => {
        if (key === 'uf') {
            dispatch(setBoardingInfo({ key: 'city', value: '' }))
        }
        dispatch(setBoardingInfo({ key, value }))

        if (key === 'adress' && value === '') {
            console.log(checkPassangersAdress())
        }
    }

    return {
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        boardingInfoState,
        transportType,
    }
}

export default useLogic
