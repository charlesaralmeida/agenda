import { PAGES, TRANSPORT_TYPE, VEHICLE_TYPE } from 'utils/constants'
import {
    decrementProgress,
    setPage,
    setOtherInfo,
    getOtherInfo,
    getTransportType,
    getVehicleType,
} from 'redux/slices/agendar'
import { useDispatch, useSelector } from 'react-redux'

const useLogic = () => {
    const otherInfoState = useSelector(getOtherInfo)
    const transportType = useSelector(getTransportType)
    const vehicleType = useSelector(getVehicleType)
    const dispatch = useDispatch()

    const handleBackClick = () => {
        if (
            vehicleType === VEHICLE_TYPE.ONIBUS ||
            vehicleType === VEHICLE_TYPE.VAN
        ) {
            dispatch(decrementProgress())
            dispatch(setPage(PAGES.PASSENGERS_SHEET))
        } else if (
            transportType === TRANSPORT_TYPE.DOCUMENTO ||
            transportType === TRANSPORT_TYPE.CARGA
        ) {
            dispatch(decrementProgress())
            dispatch(decrementProgress())
            dispatch(setPage(PAGES.FINAL_DESTINATION_INFO))
        } else if (transportType === TRANSPORT_TYPE.EMPRESTIMO) {
            dispatch(decrementProgress())
            dispatch(decrementProgress())
            dispatch(decrementProgress())
            dispatch(decrementProgress())
            dispatch(decrementProgress())
            dispatch(setPage(PAGES.VEHICLE_TYPE))
        } else {
            dispatch(decrementProgress())
            dispatch(setPage(PAGES.PASSENGERS))
        }
    }

    const handleForwardClick = () => {
        dispatch(setPage(PAGES.CONFIRMATION))
    }

    const handleChangeInfo = (key, value) => {
        dispatch(setOtherInfo({ key, value }))
        if (key === 'return') {
            if (!value) {
                dispatch(setOtherInfo({ key: 'returnDate', value: null }))
                dispatch(setOtherInfo({ key: 'returnTime', value: null }))
            } else {
                dispatch(
                    setOtherInfo({
                        key: 'returnDate',
                        value: new Date().toString(),
                    })
                )
                dispatch(
                    setOtherInfo({
                        key: 'returnTime',
                        value: new Date().toString(),
                    })
                )
            }
        }
        if (key === 'fund') {
            dispatch(
                setOtherInfo({
                    key: 'fundText',
                    value: otherInfoState.fundList[value],
                })
            )
        }

        if (key === 'retiradaDate' || key === 'devolucaoDate') {
            dispatch(setOtherInfo({ key: 'other', value: null }))
            dispatch(setOtherInfo({ key: 'tripReason', value: null }))
        }
    }

    return {
        handleBackClick,
        handleForwardClick,
        otherInfoState,
        handleChangeInfo,
        transportType,
    }
}

export default useLogic
