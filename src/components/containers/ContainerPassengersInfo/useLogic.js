import { PAGES, VINCULO_TYPE, MESSAGES } from 'utils/constants'
import {
    incrementProgress,
    decrementProgress,
    setPage,
    setPassengersInfo,
    getPassengersInfo,
    addPassengers,
    removePassengers,
} from 'redux/slices/agendar'
import { toggleShowError } from 'redux/slices/modal'
import { useDispatch, useSelector } from 'react-redux'

const useLogic = () => {
    const dispatch = useDispatch()

    const passengersInfoState = useSelector(getPassengersInfo)

    const getPassengerList = () =>
        passengersInfoState.passengersList.map((passenger) => {
            return (
                passenger.vinculo +
                ' - ' +
                passenger.name +
                ' - ' +
                passenger.documentType +
                ': ' +
                passenger.documentNumber +
                ' - Fone: ' +
                passenger.phone
            )
        })

    const handleBackClick = () => {
        dispatch(decrementProgress())
        dispatch(setPage(PAGES.FINAL_DESTINATION_INFO))
    }

    const handleForwardClick = () => {
        dispatch(incrementProgress())
        dispatch(setPage(PAGES.OTHER_INFORMATIONS))
    }

    const handleChangeInfo = (key, value) =>
        dispatch(setPassengersInfo({ key, value }))

    const addPassenger = () => {
        if (checkFields()) {
            let actualPassenger = passengersInfoState.editing
            let newPassengersList = [...passengersInfoState.passengersList]
            newPassengersList.push(actualPassenger)
            dispatch(addPassengers(newPassengersList))
        } else dispatch(toggleShowError(MESSAGES.ERROR.PASSENGER_FIELD_EMPTY))
    }

    const checkFields = () => {
        return (
            passengersInfoState.editing.vinculo != '' &&
            passengersInfoState.editing.name != '' &&
            passengersInfoState.editing.documentNumber != '' &&
            passengersInfoState.editing.phone != ''
        )
    }

    const removePassenger = (index) => {
        let newPassengersList = [...passengersInfoState.passengersList]
        newPassengersList.splice(index, 1)
        dispatch(removePassengers(newPassengersList))
    }

    const handleChangeDocumentType = (vinculo) => {
        switch (vinculo) {
            case VINCULO_TYPE.SERVIDOR_UNICAMP:
                handleChangeInfo('documentType', 'Matricula')
                break
            case VINCULO_TYPE.SERVIDOR_FUNCAMP:
                handleChangeInfo('documentType', 'Matricula')
                break
            case VINCULO_TYPE.PROFESSOR_UNICAMP:
                handleChangeInfo('documentType', 'Matricula')
                break
            case VINCULO_TYPE.ALUNO_UNICAMP:
                handleChangeInfo('documentType', 'RA')
                break
            case VINCULO_TYPE.OUTRO:
                handleChangeInfo('documentType', 'RG')
                break
            default:
                handleChangeInfo('documentType', 'Matricula')
        }
    }

    return {
        getPassengerList,
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        handleChangeDocumentType,
        addPassenger,
        removePassenger,
        passengersInfoState,
    }
}

export default useLogic
