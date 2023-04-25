import { PAGES } from 'utils/constants'
import { decrementProgress, setPage } from 'redux/slices/agendar'
import { useDispatch } from 'react-redux'

const useLogic = () => {
    const dispatch = useDispatch()

    const handleBackClick = () => {
        dispatch(decrementProgress())
        dispatch(setPage(PAGES.TRANSPORT_TYPE))
    }

    return { handleBackClick }
}

export default useLogic
