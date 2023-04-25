import React from 'react'
import ContainerAdress from '../ContainerAdress'
import ContainerDateTime from '../ContainerDateTime'

import './style.css'

const BoardingInfo = ({ handleChange, boardingInfoState }) => {
    return (
        <div role="boarding-info" className="boarding-info">
            <div className="date-time-container">
                <ContainerDateTime
                    handleChange={handleChange}
                    state={boardingInfoState}
                />
            </div>
            <div className="adress-container">
                <ContainerAdress
                    handleChange={handleChange}
                    state={boardingInfoState}
                />
            </div>
        </div>
    )
}

export default BoardingInfo
