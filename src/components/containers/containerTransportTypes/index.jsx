import React from 'react'
import ContainerListButtonsTransportTypes from 'components/containers/containerListButtonsTransportTypes'
import TitleContainer from 'components/containers/titleContainer'
import ContainerEmptyRightNavigation from '../containerEmptyRightNavigation'
import { LABELS } from 'utils/constants'
import './style.css'

const ContainerTransportTypes = () => {
    return (
        <div
            role="container-transport-types"
            className="container-transport-types"
        >
            <ContainerEmptyRightNavigation />
            <div className="main-content-transport-types">
                <div className="title-transport-types">
                    <TitleContainer text={LABELS.TIPO_TRANSPORTE} />
                </div>
                <div className="input-transport-types">
                    <ContainerListButtonsTransportTypes />
                </div>
            </div>
            <ContainerEmptyRightNavigation />
        </div>
    )
}

export default ContainerTransportTypes
