import { PAGES, TRANSPORT_TYPE, VEHICLE_TYPE } from 'utils/constants'
import {
    incrementProgress,
    decrementProgress,
    setPage,
    setFinalDestinationInfo,
    getFinalDestinationInfo,
    getTransportType,
    getVehicleType,
} from 'redux/slices/agendar'
import { useDispatch, useSelector } from 'react-redux'

const useLogic = () => {
    const finalDestinationInfoState = useSelector(getFinalDestinationInfo)
    const dispatch = useDispatch()
    const transportType = useSelector(getTransportType)
    const vehicleType = useSelector(getVehicleType)

    const handleBackClick = () => {
        if (
            transportType === TRANSPORT_TYPE.DOCUMENTO ||
            transportType === TRANSPORT_TYPE.CARGA
        ) {
            dispatch(decrementProgress())
            dispatch(decrementProgress())
            dispatch(setPage(PAGES.BOARDING_INFO))
        } else {
            dispatch(decrementProgress())
            dispatch(setPage(PAGES.INTERMEDIATE_DESTINATION_INFO))
        }
    }

    const handleForwardClick = () => {
        if (
            vehicleType === VEHICLE_TYPE.ONIBUS ||
            vehicleType === VEHICLE_TYPE.VAN
        ) {
            dispatch(incrementProgress())
            dispatch(setPage(PAGES.RESPONSAVEL))
        } else if (
            transportType === TRANSPORT_TYPE.DOCUMENTO ||
            transportType === TRANSPORT_TYPE.CARGA
        ) {
            dispatch(incrementProgress())
            dispatch(incrementProgress())
            dispatch(setPage(PAGES.OTHER_INFORMATIONS))
        } else {
            dispatch(incrementProgress())
            dispatch(setPage(PAGES.PASSENGERS))
        }
    }

    const handleChangeInfo = (key, value) => {
        if (key === 'uf')
            dispatch(setFinalDestinationInfo({ key: 'city', value: '' }))
        dispatch(setFinalDestinationInfo({ key, value }))
    }

    return {
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        finalDestinationInfoState,
        transportType,
    }
}

export default useLogic
