import './style.css'
import UseLogic from './useLogic'

const ModalError = () => {
    const { toggleModal, getTitle, getText, showModalError } = UseLogic()

    return (
        <>
            {showModalError ? (
                <div
                    className="modal-error-container"
                    role="modal-error-container"
                    onClick={toggleModal}
                >
                    <div className="modal-error" role="modal-error">
                        <div
                            className="modal-error-title"
                            role="modal-error-title"
                        >
                            {getTitle()}
                        </div>
                        <div
                            className="modal-error-text"
                            role="modal-error-text"
                        >
                            {getText()}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default ModalError
