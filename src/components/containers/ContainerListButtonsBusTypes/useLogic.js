import { COLORS, ICONS, PAGES, BUS_TYPE } from 'utils/constants'
import { incrementProgress, setPage, setBusType } from 'redux/slices/agendar'
import { useDispatch } from 'react-redux'

const useLogic = () => {
    const dispatch = useDispatch()
    const sizeIcons = '3em'
    const getList = () => [
        {
            id: BUS_TYPE.BUS,
            icon: {
                name: ICONS.BUS,
                size: sizeIcons,
                color: COLORS.PRIMARY,
            },
            label: BUS_TYPE.BUS,
        },
        {
            id: BUS_TYPE.BUS_EXECUTIVE,
            icon: {
                name: ICONS.BUS,
                size: sizeIcons,
                color: COLORS.PRIMARY,
            },
            label: BUS_TYPE.BUS_EXECUTIVE,
        },
        {
            id: BUS_TYPE.BUS_MICRO,
            icon: {
                name: ICONS.BUS_SIMPLE,
                size: sizeIcons,
                color: COLORS.PRIMARY,
            },
            label: BUS_TYPE.BUS_MICRO,
        },
    ]

    const handleClick = (typeId) => {
        dispatch(setBusType(typeId))
        dispatch(incrementProgress())
        dispatch(setPage(PAGES.BOARDING_INFO))
    }

    return { getList, handleClick }
}

export default useLogic
