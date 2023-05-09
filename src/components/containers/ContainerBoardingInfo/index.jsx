import React from 'react'
import TitleContainer from 'components/containers/titleContainer'
import { LABELS } from 'utils/constants'
import ButtonBackNavigation from 'components/buttons/ButtonBackNavigation'
import ButtonFowardNavigation from 'components/buttons/ButtonFowardNavigation'
import BoardingInfo from 'components/containers/BoardingInfo'
import ModalError from '../../modals/ModalError'
import './style.css'
import useLogic from './useLogic'
import { TRANSPORT_TYPE } from '../../../utils/constants'

const ContainerBoardingInfo = () => {
    const {
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        boardingInfoState,
        transportType,
    } = useLogic()

    return (
        <div role="container-boarding-info" className="container-boarding-info">
            <ButtonBackNavigation handleClick={handleBackClick} />
            <div
                role="main-content-boarding-info"
                className="main-content-boarding-info"
            >
                <div className="title-boarding-info" role="title-boarding-info">
                    {transportType === TRANSPORT_TYPE.DOCUMENTO ||
                    transportType === TRANSPORT_TYPE.CARGA ? (
                        <TitleContainer text={LABELS.LOCAL_RETIRADA} />
                    ) : (
                        <TitleContainer text={LABELS.EMBARQUE} />
                    )}
                </div>
                <div className="input-boarding-info" role="input-boarding-info">
                    <BoardingInfo
                        handleChange={handleChangeInfo}
                        boardingInfoState={boardingInfoState}
                    />
                </div>
            </div>
            <ButtonFowardNavigation handleClick={handleForwardClick} />
            <ModalError />
        </div>
    )
}

export default ContainerBoardingInfo
