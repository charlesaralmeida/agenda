import React from 'react'
import ContainerListButtonsVehicleTypes from 'components/containers/containerListButtonsVehicleTypes'
import TitleContainer from 'components/containers/titleContainer'
import { LABELS } from 'utils/constants'
import ButtonBackNavigation from 'components/buttons/ButtonBackNavigation'
import ContainerEmptyRightNavigation from '../containerEmptyRightNavigation'
import useLogic from './useLogic'
import './style.css'

const ContainerVehicleTypes = () => {
    const { handleBackClick } = useLogic()

    return (
        <div role="container-vehicle-types" className="container-vehicle-types">
            <ButtonBackNavigation handleClick={handleBackClick} />
            <div className="main-content-vehicle-types">
                <div className="title-vehicle-types">
                    <TitleContainer text={LABELS.TIPO_VEICULO} />
                </div>
                <div className="input-vehicle-types">
                    <ContainerListButtonsVehicleTypes />
                </div>
            </div>
            <ContainerEmptyRightNavigation />
        </div>
    )
}

export default ContainerVehicleTypes
