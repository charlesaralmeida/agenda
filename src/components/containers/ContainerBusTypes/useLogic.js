import { PAGES } from 'utils/constants'
import { decrementProgress, setPage } from 'redux/slices/agendar'
import { useDispatch } from 'react-redux'

const useLogic = () => {
    const dispatch = useDispatch()

    const handleBackClick = () => {
        dispatch(setPage(PAGES.VEHICLE_TYPE))
    }

    return { handleBackClick }
}

export default useLogic
