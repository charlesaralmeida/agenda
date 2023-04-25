import React from 'react'
import ContainerListButtonsBusTypes from 'components/containers/ContainerListButtonsBusTypes'
import TitleContainer from 'components/containers/titleContainer'
import SubLabel from 'components/sublabels'
import { LABELS, SUBLABELS } from 'utils/constants'
import ButtonBackNavigation from 'components/buttons/ButtonBackNavigation'
import ContainerEmptyRightNavigation from '../containerEmptyRightNavigation'
import useLogic from './useLogic'
import './style.css'

const ContainerBusTypes = () => {
    const { handleBackClick } = useLogic()

    return (
        <div role="container-bus-types" className="container-bus-types">
            <ButtonBackNavigation handleClick={handleBackClick} />
            <div className="main-content-bus-types">
                <div className="title-bus-types">
                    <TitleContainer text={LABELS.TIPO_BUS} />
                </div>
                <div className="input-bus-types">
                    <ContainerListButtonsBusTypes />
                </div>
            </div>
            <ContainerEmptyRightNavigation />
        </div>
    )
}

export default ContainerBusTypes
