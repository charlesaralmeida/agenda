import React from 'react'
import './style.css'
import useLogic from './useLogic'
import ButtonConfirmation from '../../buttons/ButtonConfirmation'
import ButtonCheckInformations from '../../buttons/ButtonCheckInformations'
import ModalMessage from 'components/modals/ModalMessage'
import ModalError from 'components/modals/ModalError'

const ContainerConfirmation = () => {
    const { handleBackClick, useHandleConfirmationClick } = useLogic()

    return (
        <div role="container-confirmation" className="container-confirmation">
            <ModalMessage />
            <ModalError />
            <div
                role="main-content-confirmation"
                className="main-content-confirmation"
            >
                <div
                    role="container-check-informations"
                    className="container-check-informations"
                >
                    <span>Conferir Informações</span>
                    <ButtonCheckInformations handleClick={handleBackClick} />
                </div>
                <div role="container-confirm" className="container-confirm">
                    <span>Confirmar Agendamento</span>
                    <ButtonConfirmation
                        handleClick={useHandleConfirmationClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContainerConfirmation
