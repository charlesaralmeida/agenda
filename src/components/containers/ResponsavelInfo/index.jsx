import React from 'react'
import ContainerResponsavelTypeWithButton from '../ContainerResponsavelTypeWithButton'
import './style.css'

const ResponsavelInfo = ({
    handleChange,
    handleChangeDocumentType,
    state,
    addResponsavel,
}) => {
    return (
        <div role="responsavel-info" className="responsavel-info">
            <div className="responsavel-container" role="responsavel-container">
                <ContainerResponsavelTypeWithButton
                    handleChange={handleChange}
                    handleChangeDocumentType={handleChangeDocumentType}
                    state={state}
                    addResponsavel={addResponsavel}
                />
            </div>
        </div>
    )
}

export default ResponsavelInfo
