import { PAGES, MESSAGES, TRANSPORT_TYPE, VEHICLE_TYPE } from 'utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setPage, getState } from 'redux/slices/agendar'
import { toggleShowMessage, toggleShowError } from 'redux/slices/modal'
import Database from 'dbfunctions'
import { useCheckInfo } from './checkInfo'

const useLogic = () => {
    const dispatch = useDispatch()
    const tripState = useSelector(getState)

    const {
        checkPassengerWithCarOrKombi,
        checkPassengerWithVanOrBus,
        checkCargo,
        checkEmprestimo,
    } = useCheckInfo()

    const handleBackClick = () => {
        dispatch(setPage(PAGES.OTHER_INFORMATIONS))
    }

    const useHandleConfirmationClick = () => {
        let result = null

        if (
            tripState.transportType === TRANSPORT_TYPE.PASSAGEIRO &&
            (tripState.vehicleType === VEHICLE_TYPE.CARRO ||
                tripState.vehicleType === VEHICLE_TYPE.KOMBI)
        ) {
            result = checkPassengerWithCarOrKombi(tripState)
        }

        if (
            tripState.transportType === TRANSPORT_TYPE.PASSAGEIRO &&
            (tripState.vehicleType === VEHICLE_TYPE.VAN ||
                tripState.vehicleType === VEHICLE_TYPE.ONIBUS)
        ) {
            result = checkPassengerWithVanOrBus(tripState)
        }

        if (
            tripState.transportType === TRANSPORT_TYPE.CARGA ||
            tripState.transportType === TRANSPORT_TYPE.DOCUMENTO
        ) {
            result = checkCargo(tripState)
        }

        if (tripState.transportType === TRANSPORT_TYPE.EMPRESTIMO) {
            result = checkEmprestimo(tripState)
        }

        if (result) {
            result
                .then(() => {
                    let data = {}
                    if (tripState.transportType !== TRANSPORT_TYPE.EMPRESTIMO)
                        data = getDataToBeSaved()
                    else data = getDataToBeSavedEmprestimo()

                    Database.saveAgenda(data)
                        .then(() =>
                            dispatch(toggleShowMessage(MESSAGES.DATA_SAVED))
                        )
                        .catch(() =>
                            dispatch(
                                toggleShowError(MESSAGES.ERROR.SAVING_DATA)
                            )
                        )
                })
                .catch((error) => dispatch(toggleShowError(error)))
        }
    }

    const getDataToBeSaved = () => {
        let data = {}
        Object.assign(data, {
            transportType: tripState['transportType'],
            vehicleType: tripState['vehicleType'],
            busType: tripState['busType'],
            boardingInfo: tripState['boardingInfo'],
            intermediateDestinationInfo:
                tripState['intermediateDestinationInfo']['destinationsList'],
            finalDestinationInfo: tripState['finalDestinationInfo'],
            passengersInfo: tripState['passengersInfo']['passengersList'],
            responsavelInfo: tripState['responsavelInfo']['responsavelList'],
            passengersSheetList: tripState['passengersSheetList'],
            otherInfo: tripState['otherInfo']['editing'],
        })
        return data
    }

    const getDataToBeSavedEmprestimo = () => {
        let data = {}
        Object.assign(data, {
            transportType: tripState['transportType'],
            vehicleType: tripState['vehicleType'],
            otherInfo: tripState['otherInfo']['editing'],
        })
        return data
    }

    return { handleBackClick, useHandleConfirmationClick }
}

export default useLogic
