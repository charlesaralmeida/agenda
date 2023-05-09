import { PAGES, MESSAGES } from 'utils/constants'
import {
    incrementProgress,
    decrementProgress,
    setPage,
    setIntermediateDestinationInfo,
    getIntermediateDestinationInfo,
    addIntermediateDestination,
    removeIntermediateDestination,
    getVehicleType,
} from 'redux/slices/agendar'
import { toggleShowError } from 'redux/slices/modal'
import { useDispatch, useSelector } from 'react-redux'

const useLogic = () => {
    const intermediateDestinationInfoState = useSelector(
        getIntermediateDestinationInfo
    )
    const vehicleType = useSelector(getVehicleType)
    const dispatch = useDispatch()

    const getDestinationList = () =>
        intermediateDestinationInfoState.destinationsList.map((destination) => {
            let time = ''
            if (destination.estimatedTimeType === 'Horas') {
                let hours = new Date(destination.estimatedTime).getHours()
                let minutes = new Date(destination.estimatedTime).getMinutes()
                if (hours > 0) {
                    time = hours.toString() + ' hora(s)'
                    if (minutes > 0)
                        time = time + ' e ' + minutes.toString() + ' minuto(s)'
                } else {
                    if (minutes > 0) time = minutes.toString() + ' minuto(s)'
                    else time = '-'
                }
            } else {
                if (destination.estimatedDays > 0)
                    time = destination.estimatedDays + ' dia(s)'
                else time = '-'
            }
            return (
                destination.adress +
                ' - ' +
                destination.city +
                '/' +
                destination.uf +
                ' - tempo: ' +
                time
            )
        })

    const handleBackClick = () => {
        if (checkAdress() || checkEstimatedTime()) {
            addDestination()
            if (checkAdress() && checkEstimatedTime()) {
                dispatch(decrementProgress())
                dispatch(setPage(PAGES.BOARDING_INFO))
            }
        } else {
            dispatch(decrementProgress())
            dispatch(setPage(PAGES.BOARDING_INFO))
        }
    }

    const handleForwardClick = () => {
        if (checkAdress() || checkEstimatedTime()) {
            addDestination()
            if (checkAdress() && checkEstimatedTime()) {
                dispatch(incrementProgress())
                dispatch(setPage(PAGES.FINAL_DESTINATION_INFO))
            }
        } else {
            dispatch(incrementProgress())
            dispatch(setPage(PAGES.FINAL_DESTINATION_INFO))
        }
    }

    const handleChangeInfo = (key, value) => {
        if (key === 'uf')
            dispatch(setIntermediateDestinationInfo({ key: 'city', value: '' }))
        dispatch(setIntermediateDestinationInfo({ key, value }))
    }

    const addDestination = () => {
        if (checkAdress()) {
            if (checkEstimatedTime()) {
                let actualDestination = Object.assign(
                    {},
                    {
                        uf: intermediateDestinationInfoState.editing.uf,
                        city: intermediateDestinationInfoState.editing.city,
                        adress: intermediateDestinationInfoState.editing.adress,
                        reference:
                            intermediateDestinationInfoState.editing.reference,
                        estimatedTimeType:
                            intermediateDestinationInfoState.editing
                                .estimatedTimeType,
                    }
                )

                if (
                    intermediateDestinationInfoState.editing
                        .estimatedTimeType === 'Horas'
                )
                    actualDestination['estimatedTime'] =
                        intermediateDestinationInfoState.editing.estimatedTime
                else
                    actualDestination['estimatedDays'] =
                        intermediateDestinationInfoState.editing.estimatedDays

                let newDestinationsList = [
                    ...intermediateDestinationInfoState.destinationsList,
                ]
                newDestinationsList.push(actualDestination)
                dispatch(addIntermediateDestination(newDestinationsList))
            } else
                dispatch(toggleShowError(MESSAGES.ERROR.ESTIMATED_TIME_EMPTY))
        } else dispatch(toggleShowError(MESSAGES.ERROR.ADRESS_EMPTY))
    }

    const checkAdress = () => {
        return (
            intermediateDestinationInfoState.editing.uf != '' &&
            intermediateDestinationInfoState.editing.city != '' &&
            intermediateDestinationInfoState.editing.adress != ''
        )
    }

    const checkEstimatedTime = () => {
        switch (intermediateDestinationInfoState.editing.estimatedTimeType) {
            case 'Horas':
                if (
                    new Date(
                        intermediateDestinationInfoState.editing.estimatedTime
                    ).getHours() > 0
                )
                    return true
                if (
                    new Date(
                        intermediateDestinationInfoState.editing.estimatedTime
                    ).getMinutes() > 0
                )
                    return true
                break
            case 'Dias':
                if (
                    parseInt(
                        intermediateDestinationInfoState.editing.estimatedDays
                    ) > 0
                )
                    return true
                break
        }
        return false
    }

    const removeDestination = (index) => {
        let newDestinationsList = [
            ...intermediateDestinationInfoState.destinationsList,
        ]
        newDestinationsList.splice(index, 1)
        dispatch(removeIntermediateDestination(newDestinationsList))
    }

    return {
        getDestinationList,
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        intermediateDestinationInfoState,
        addDestination,
        removeDestination,
        vehicleType,
    }
}

export default useLogic
