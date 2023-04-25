import React from 'react'
import ContainerAdressWithPlusButton from '../ContainerAdressWithPlusButton'
import ContainerEstimatedTime from '../ContainerEstimatedTime'
import './style.css'

const IntermediateDestinationInfo = ({
    handleChange,
    state,
    addDestination,
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
            <div
                className="intermediate-estimated-time-container"
                role="intermediate-estimated-time-container"
            >
                <ContainerEstimatedTime
                    handleChange={handleChange}
                    state={state}
                />
            </div>
        </div>
    )
}

export default IntermediateDestinationInfo
