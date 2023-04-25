import { COLORS, ICONS, PAGES, VEHICLE_TYPE } from 'utils/constants'
import {
    incrementProgress,
    setPage,
    setVehicleType,
    getTransportType,
} from 'redux/slices/agendar'
import { useDispatch, useSelector } from 'react-redux'
import { TRANSPORT_TYPE } from '../../../utils/constants'

const useLogic = () => {
    const dispatch = useDispatch()

    const transportType = useSelector(getTransportType)

    const sizeIcons = '3em'
    const list = [
        {
            id: VEHICLE_TYPE.CARRO,
            icon: {
                name: ICONS.CAR,
                size: sizeIcons,
                color: COLORS.PRIMARY,
            },
            label: VEHICLE_TYPE.CARRO,
        },
        {
            id: VEHICLE_TYPE.KOMBI,
            icon: {
                name: ICONS.KOMBI,
                size: sizeIcons,
                color: COLORS.PRIMARY,
            },
            label: VEHICLE_TYPE.KOMBI,
        },
        {
            id: VEHICLE_TYPE.FURGAO,
            icon: {
                name: ICONS.FURGAO,
                size: sizeIcons,
                color: COLORS.PRIMARY,
            },
            label: VEHICLE_TYPE.FURGAO,
        },
        {
            id: VEHICLE_TYPE.VAN,
            icon: {
                name: ICONS.VAN,
                size: sizeIcons,
                color: COLORS.PRIMARY,
            },
            label: VEHICLE_TYPE.VAN,
        },
        {
            id: VEHICLE_TYPE.ONIBUS,
            icon: {
                name: ICONS.BUS,
                size: sizeIcons,
                color: COLORS.PRIMARY,
            },
            label: VEHICLE_TYPE.ONIBUS,
        },
    ]

    const getList = () => {
        switch (transportType) {
            case TRANSPORT_TYPE.PASSAGEIRO:
                return [list[0], list[1], list[3], list[4]]
            case TRANSPORT_TYPE.CARGA:
                return [list[0], list[1], list[2]]
            case TRANSPORT_TYPE.EMPRESTIMO:
                return [list[0], list[1], list[2]]
        }
    }

    const handleClick = (typeId) => {
        dispatch(setVehicleType(typeId))
        //se tipo de veiculo é ônibus, não incrementa, pois precisa selecionar o tipo de ônibus
        if (typeId === VEHICLE_TYPE.ONIBUS) dispatch(setPage(PAGES.BUS_TYPE))
        else if (transportType === TRANSPORT_TYPE.EMPRESTIMO) {
            //incrementa cinco vezes porque pula escolha de veiculo
            dispatch(incrementProgress())
            dispatch(incrementProgress())
            dispatch(incrementProgress())
            dispatch(incrementProgress())
            dispatch(incrementProgress())
            dispatch(setPage(PAGES.OTHER_INFORMATIONS))
        } else {
            dispatch(incrementProgress())
            dispatch(setPage(PAGES.BOARDING_INFO))
        }
    }

    return { getList, handleClick }
}

export default useLogic
