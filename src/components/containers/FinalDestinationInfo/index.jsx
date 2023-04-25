import React from 'react'
import ContainerAdress from '../ContainerAdress'
import './style.css'

const FinalDestinationInfo = ({ handleChange, finalDestinationInfoState }) => {
    return (
        <div role="final-destination-info" className="final-destination-info">
            <div className="adress-container" role="adress-container">
                <ContainerAdress
                    handleChange={handleChange}
                    state={finalDestinationInfoState}
                />
            </div>
        </div>
    )
}

export default FinalDestinationInfo
