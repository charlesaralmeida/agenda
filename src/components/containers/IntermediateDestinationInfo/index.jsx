import React from 'react'
import ContainerAdressWithPlusButton from '../ContainerAdressWithPlusButton'
import ContainerEstimatedTime from '../ContainerEstimatedTime'
import './style.css'
import { VEHICLE_TYPE } from '../../../utils/constants'

const IntermediateDestinationInfo = ({
    handleChange,
    state,
    addDestination,
    vehicleType,
}) => {
    return (
        <div
            role="intermediate-destination-info"
            className="intermediate-destination-info"
        >
            <div
                className="intermediate-adress-container"
                role="intermediate-adress-container"
            >
                <ContainerAdressWithPlusButton
                    handleChange={handleChange}
                    state={state}
                    addDestination={addDestination}
                />
            </div>
            {vehicleType === VEHICLE_TYPE.ONIBUS ||
            vehicleType === VEHICLE_TYPE.VAN ? (
                <div
                    className="intermediate-estimated-time-container"
                    role="intermediate-estimated-time-container"
                >
                    <ContainerEstimatedTime
                        handleChange={handleChange}
                        state={state}
                    />
                </div>
            ) : null}
        </div>
    )
}

export default IntermediateDestinationInfo
