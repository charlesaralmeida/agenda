import { useDispatch, useSelector } from 'react-redux'
import { toggleShowError, getStateModal } from 'redux/slices/modal'

const useLogic = () => {
    const dispatch = useDispatch()
    const modalState = useSelector(getStateModal)
    const showModalError = modalState.showError

    const toggleModal = () => dispatch(toggleShowError({ TITLE: '', TEXT: '' }))

    const getTextLines = (string) => {
        if (string) {
            if (string.split('\n').length) {
                let content = string.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))
                return content
            } else return string
        } else return string
    }

    const getTitle = () => getTextLines(modalState.message.title)
    const getText = () => getTextLines(modalState.message.text)

    return { toggleModal, getTitle, getText, showModalError }
}

export default useLogic
