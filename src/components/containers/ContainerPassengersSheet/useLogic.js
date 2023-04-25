import { PAGES, MESSAGES } from 'utils/constants'
import {
    incrementProgress,
    setPage,
    setPassengerSheetList,
    getPassengerSheetList,
} from 'redux/slices/agendar'
import { toggleShowMessage, toggleShowError } from 'redux/slices/modal'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const useLogic = () => {
    const dispatch = useDispatch()

    const [titleModal, setTitleModal] = useState('')
    const [textModal, setTextModal] = useState('')

    const passengerSheetList = useSelector(getPassengerSheetList)

    const handleBackClick = () => {
        dispatch(setPage(PAGES.RESPONSAVEL))
    }

    const handleForwardClick = () => {
        dispatch(incrementProgress())
        dispatch(setPage(PAGES.OTHER_INFORMATIONS))
    }

    const getDataFromSheet = (result) => {
        result
            .then((data) => {
                if (checkPassengerList(data)) {
                    dispatch(setPassengerSheetList(data))
                    showPassengerList(data)
                } else alertSheetFieldsError()
            })
            .catch((error) => {
                dispatch(toggleShowError(error))
            })
    }

    const checkPassengerList = (list) => {
        let result = true
        list.forEach((passenger) => {
            if (
                !(passenger.Nome && passenger.RG && passenger.Orgao_Emissor_RG)
            ) {
                result = false
            }
        })
        return result
    }

    const alertSheetFieldsError = () =>
        dispatch(toggleShowError(MESSAGES.ERROR.FIELDS_LISTA_PASSAGEIROS))

    const showPassengerList = (list) => {
        if (checkPassengerList(list)) {
            let text = ``
            list.forEach((passenger) => {
                text = text.concat(
                    `${passenger.Nome}, RG: ${passenger.RG}, Orgão Emissor: ${passenger.Orgao_Emissor_RG} \n`
                )
            })
            dispatch(
                toggleShowMessage({
                    TITLE: MESSAGES.UPLOAD_LISTA_PASSAGEIROS.TITLE,
                    TEXT: text,
                })
            )
        }
    }

    const clearPassengerList = () => {
        dispatch(setPassengerSheetList([]))
    }

    return {
        handleBackClick,
        handleForwardClick,
        getDataFromSheet,
        titleModal,
        textModal,
        showPassengerList,
        passengerSheetList,
        clearPassengerList,
    }
}

export default useLogic
