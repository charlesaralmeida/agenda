import UserViewHeader from '../components/header/userViewHeader'
import TransportTypePage from './TransportTypePage'
import VehicleTypePage from './VehicleTypePage'
import BusTypePage from './BusTypePage'
import BoardingInfoPage from './BoardingInfoPage'
import FinalDestinationInfoPage from './FinalDestinationInfoPage'
import IntermediateDestinationInfoPage from './IntermediateDestinationInfoPage'
import OtherInformationsPage from './OtherInformationsPage'
import PassengersPage from './PassengersPage'
import PassengersSheetPage from './PassengersSheetPage'
import ResponsavelPage from './ResponsavelPage'
import ConfirmationPage from './ConfirmationPage'
import LinearProgress from '@mui/material/LinearProgress'
import { useSelector } from 'react-redux'
import { getState } from '../redux/slices/agendar'
import { PAGES } from '../utils/constants'
import './style.css'

const AgendarPages = () => {
    const state = useSelector(getState)
    const getPage = (pageName) => {
        switch (pageName) {
            case PAGES.BOARDING_INFO:
                return <BoardingInfoPage />
            case PAGES.FINAL_DESTINATION_INFO:
                return <FinalDestinationInfoPage />
            case PAGES.INTERMEDIATE_DESTINATION_INFO:
                return <IntermediateDestinationInfoPage />
            case PAGES.OTHER_INFORMATIONS:
                return <OtherInformationsPage />
            case PAGES.PASSENGERS:
                return <PassengersPage />
            case PAGES.PASSENGERS_SHEET:
                return <PassengersSheetPage />
            case PAGES.RESPONSAVEL:
                return <ResponsavelPage />
            case PAGES.TRANSPORT_TYPE:
                return <TransportTypePage />
            case PAGES.VEHICLE_TYPE:
                return <VehicleTypePage />
            case PAGES.CONFIRMATION:
                return <ConfirmationPage />
            case PAGES.BUS_TYPE:
                return <BusTypePage />
        }
    }

    return (
        <div className="pages">
            <div className="header">
                <UserViewHeader />
            </div>
            <div className="page-content">{getPage(state.currentPage)}</div>
            <div className="container-progress" role="container-progress">
                <div>
                    <LinearProgress
                        variant="determinate"
                        value={state.progress}
                    />
                </div>
            </div>
        </div>
    )
}

export default AgendarPages
