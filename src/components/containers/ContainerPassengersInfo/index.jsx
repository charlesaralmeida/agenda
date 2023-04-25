import React from 'react'
import TitleContainer from 'components/containers/titleContainer'
import SubLabel from 'components/sublabels'
import { LABELS, SUBLABELS } from 'utils/constants'
import ButtonBackNavigation from 'components/buttons/ButtonBackNavigation'
import ButtonFowardNavigation from 'components/buttons/ButtonFowardNavigation'
import PassengersInfo from 'components/containers/PassengersInfo'
import ListNumberedWithTooltip from 'components/lists/listNumberedWithTooltip'
import './style.css'
import useLogic from './useLogic'
import ModalError from '../../modals/ModalError'

const ContainerPassengersInfo = () => {
    const {
        getPassengerList,
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        handleChangeDocumentType,
        addPassenger,
        removePassenger,
        passengersInfoState,
    } = useLogic()

    return (
        <div
            role="container-passenger-info"
            className="container-passenger-info"
        >
            <ButtonBackNavigation handleClick={handleBackClick} />
            <div
                role="main-content-passenger-info"
                className="main-content-passenger-info"
            >
                <div
                    className="title-passenger-info"
                    role="title-passenger-info"
                >
                    <TitleContainer
                        text={LABELS.PASSENGERS}
                        children={
                            <div role="sub-label" className="sub-label">
                                <SubLabel text={SUBLABELS.PASSENGERS} />
                                <div role="list-numbered-with-tooltip">
                                    <ListNumberedWithTooltip
                                        handleClick={removePassenger}
                                        list={getPassengerList()}
                                    />
                                </div>
                            </div>
                        }
                    />
                </div>
                <div
                    className="input-passenger-info"
                    role="input-passenger-info"
                >
                    <PassengersInfo
                        handleChange={handleChangeInfo}
                        handleChangeDocumentType={handleChangeDocumentType}
                        state={passengersInfoState}
                        addPassenger={addPassenger}
                    />
                    <ModalError />
                </div>
            </div>
            <ButtonFowardNavigation handleClick={handleForwardClick} />
        </div>
    )
}

export default ContainerPassengersInfo
