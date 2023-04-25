import React from 'react'
import ContainerPassengersTypeWithButton from '../ContainerPassengersTypeWithButton'
import './style.css'

const PassengersInfo = ({
    handleChange,
    handleChangeDocumentType,
    state,
    addPassenger,
}) => {
    return (
        <div role="passengers-info" className="passengers-info">
            <div className="passengers-container" role="passengers-container">
                <ContainerPassengersTypeWithButton
                    handleChange={handleChange}
                    handleChangeDocumentType={handleChangeDocumentType}
                    state={state}
                    addPassenger={addPassenger}
                />
            </div>
        </div>
    )
}

export default PassengersInfo
