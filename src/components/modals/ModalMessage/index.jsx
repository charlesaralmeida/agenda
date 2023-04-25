import './style.css'
import UseLogic from './useLogic'

const ModalMessage = () => {
    const { toggleModal, getTitle, getText, showModalMessage } = UseLogic()

    return (
        <>
            {showModalMessage ? (
                <div
                    className="modal-message-container"
                    role="modal-message-container"
                    onClick={toggleModal}
                >
                    <div className="modal-message" role="modal-message">
                        <div
                            className="modal-message-title"
                            role="modal-message-title"
                        >
                            {getTitle()}
                        </div>
                        <div
                            className="modal-message-text"
                            role="modal-message-text"
                        >
                            {getText()}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default ModalMessage
