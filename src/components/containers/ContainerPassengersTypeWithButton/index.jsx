import NameInput from '../../inputs/NameInput'
import PassengerTypeSelect from '../../selects/PassengerTypeSelect'
import DocumentNumberInput from '../../inputs/DocumentNumberInput'
import PhoneInput from '../../inputs/PhoneInput'
import ButtonPlus from 'components/buttons/ButtonPlus'
import './style.css'

const ContainerPassengersTypeWithButton = ({
    handleChange,
    handleChangeDocumentType,
    state,
    addPassenger,
}) => {
    return (
        <div
            role="container-passengers-with-button"
            className="container-passengers-with-button"
        >
            <div
                className="container-type-with-button"
                role="container-type-with-button"
            >
                <div
                    className="container-type-with-button-select"
                    role="container-type-with-button-select"
                >
                    <PassengerTypeSelect
                        handleChangeValue={handleChange}
                        handleChangeDocumentType={handleChangeDocumentType}
                        keyValue={'vinculo'}
                        value={state.editing.vinculo}
                    />
                </div>
                <div
                    className="container-button-plus"
                    role="container-button-plus"
                >
                    <ButtonPlus handleClick={addPassenger} />
                </div>
            </div>
            <div
                className="container-passenger-data-input"
                role="container-passenger-data-input"
            >
                <NameInput
                    handleChange={handleChange}
                    keyValue={'name'}
                    value={state.editing.name}
                />
                <DocumentNumberInput
                    handleChange={handleChange}
                    keyValue={'documentNumber'}
                    documentType={state.editing.documentType}
                    value={state.editing.documentNumber}
                />
                <PhoneInput
                    handleChange={handleChange}
                    keyValue={'phone'}
                    value={state.editing.phone}
                />
            </div>
        </div>
    )
}

export default ContainerPassengersTypeWithButton
