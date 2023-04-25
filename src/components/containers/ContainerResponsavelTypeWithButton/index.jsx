import NameInput from '../../inputs/NameInput'
import ResponsavelTypeSelect from '../../selects/ResponsavelTypeSelect'
import DocumentNumberInput from '../../inputs/DocumentNumberInput'
import PhoneInput from '../../inputs/PhoneInput'
import ButtonPlus from 'components/buttons/ButtonPlus'
import './style.css'

const ContainerResponsavelTypeWithButton = ({
    handleChange,
    handleChangeDocumentType,
    state,
    addResponsavel,
}) => {
    return (
        <div
            role="container-responsavel-with-button"
            className="container-responsavel-with-button"
        >
            <div
                className="container-responsavel-type-with-button"
                role="container-responsavel-type-with-button"
            >
                <div
                    className="container-responsavel-type-with-button-select"
                    role="container-responsavel-type-with-button-select"
                >
                    <ResponsavelTypeSelect
                        handleChangeValue={handleChange}
                        handleChangeDocumentType={handleChangeDocumentType}
                        keyValue={'vinculo'}
                        value={state.editing.vinculo}
                    />
                </div>
                <div
                    className="container-responsavel-button-plus"
                    role="container-responsavel-button-plus"
                >
                    <ButtonPlus handleClick={addResponsavel} />
                </div>
            </div>
            <div
                className="container-responsavel-data-input"
                role="container-responsavel-data-input"
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

export default ContainerResponsavelTypeWithButton
