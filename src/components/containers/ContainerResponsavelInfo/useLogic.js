import { MAX_RESPONSAVEL, PAGES, VINCULO_TYPE, MESSAGES } from 'utils/constants'
import {
    decrementProgress,
    setPage,
    setResponsavelInfo,
    getResponsavelInfo,
    addResponsavel,
    removeResponsavel,
} from 'redux/slices/agendar'
import { toggleShowError } from 'redux/slices/modal'
import { useDispatch, useSelector } from 'react-redux'

const useLogic = () => {
    const dispatch = useDispatch()

    const responsavelInfoState = useSelector(getResponsavelInfo)

    const getResponsavelList = () =>
        responsavelInfoState.responsavelList.map((responsavel) => {
            return (
                responsavel.vinculo +
                ' - ' +
                responsavel.name +
                ' - ' +
                responsavel.documentType +
                ': ' +
                responsavel.documentNumber +
                ' - Fone: ' +
                responsavel.phone
            )
        })

    const handleBackClick = () => {
        dispatch(decrementProgress())
        dispatch(setPage(PAGES.FINAL_DESTINATION_INFO))
    }

    const handleForwardClick = () => {
        dispatch(setPage(PAGES.PASSENGERS_SHEET))
    }

    const handleChangeInfo = (key, value) =>
        dispatch(setResponsavelInfo({ key, value }))

    const addResp = () => {
        if (checkFields()) {
            let actualResponsavel = responsavelInfoState.editing
            let newResponsavelList = [...responsavelInfoState.responsavelList]
            if (newResponsavelList.length < MAX_RESPONSAVEL) {
                newResponsavelList.push(actualResponsavel)
                dispatch(addResponsavel(newResponsavelList))
            }
        } else dispatch(toggleShowError(MESSAGES.ERROR.PASSENGER_FIELD_EMPTY))
    }

    const checkFields = () => {
        return (
            responsavelInfoState.editing.vinculo != '' &&
            responsavelInfoState.editing.name != '' &&
            responsavelInfoState.editing.documentNumber != '' &&
            responsavelInfoState.editing.phone != ''
        )
    }

    const removeResp = (index) => {
        let newResponsavelList = [...responsavelInfoState.responsavelList]
        newResponsavelList.splice(index, 1)
        dispatch(removeResponsavel(newResponsavelList))
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
            default:
                handleChangeInfo('documentType', 'Matricula')
        }
    }

    return {
        getResponsavelList,
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        handleChangeDocumentType,
        addResp,
        removeResp,
        responsavelInfoState,
    }
}

export default useLogic
