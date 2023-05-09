import React from 'react'
import TitleContainer from 'components/containers/titleContainer'
import SubLabel from 'components/sublabels'
import { LABELS, SUBLABELS } from 'utils/constants'
import ButtonBackNavigation from 'components/buttons/ButtonBackNavigation'
import ButtonFowardNavigation from 'components/buttons/ButtonFowardNavigation'
import IntermediateDestinationInfo from 'components/containers/IntermediateDestinationInfo'
import ListNumberedWithTooltip from 'components/lists/listNumberedWithTooltip'
import './style.css'
import useLogic from './useLogic'
import ModalError from '../../modals/ModalError'

const ContainerIntermediateDestinationInfo = () => {
    const {
        getDestinationList,
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        intermediateDestinationInfoState,
        addDestination,
        removeDestination,
        vehicleType,
    } = useLogic()
    return (
        <div
            role="container-intermediate-destination-info"
            className="container-intermediate-destination-info"
        >
            <ButtonBackNavigation handleClick={handleBackClick} />
            <div
                role="main-content-intermediate-destination-info"
                className="main-content-intermediate-destination-info"
            >
                <div
                    className="title-intermediate-destination-info"
                    role="title-intermediate-destination-info"
                >
                    <TitleContainer
                        text={LABELS.INTERMEDIATE_DESTINATION}
                        children={
                            <div role="sub-label" className="sub-label">
                                <SubLabel
                                    text={SUBLABELS.INTERMEDIATE_DESTINATION}
                                />
                                <div role="list-numbered-with-tooltip">
                                    <ListNumberedWithTooltip
                                        handleClick={removeDestination}
                                        list={getDestinationList()}
                                    />
                                </div>
                            </div>
                        }
                    />
                </div>
                <div
                    className="input-intermediate-destination-info"
                    role="input-intermediate-destination-info"
                >
                    <IntermediateDestinationInfo
                        handleChange={handleChangeInfo}
                        state={intermediateDestinationInfoState}
                        addDestination={addDestination}
                        vehicleType={vehicleType}
                    />
                    <ModalError />
                </div>
            </div>
            <ButtonFowardNavigation handleClick={handleForwardClick} />
        </div>
    )
}

export default ContainerIntermediateDestinationInfo
