import AdressInput from '../../inputs/AdressInput'
import CityInput from '../../inputs/CityInput'
import ReferencePointInput from '../../inputs/ReferencePointInput'
import UfInput from '../../inputs/UfInput'
import ButtonPlus from 'components/buttons/ButtonPlus'
import './style.css'

const ContainerAdressWithPlusButton = ({
    handleChange,
    state,
    addDestination,
}) => {
    return (
        <div role="container-adress-button" className="container-adress-button">
            <div
                className="container-city-uf-button"
                role="container-city-uf-button"
            >
                <div
                    className="container-city-uf-button-input"
                    role="container-city-uf-button-input"
                >
                    <UfInput
                        handleChange={handleChange}
                        keyValue={'uf'}
                        value={state.editing.uf}
                    />
                    <CityInput
                        handleChange={handleChange}
                        keyValue={'city'}
                        uf={state.editing.uf}
                        value={state.editing.city}
                    />
                </div>
                <div
                    className="container-button-plus"
                    role="container-button-plus"
                >
                    <ButtonPlus handleClick={addDestination} />
                </div>
            </div>
            <div
                className="container-intermediate-adress-input"
                role="container-intermediate-adress-input"
            >
                <AdressInput
                    handleChange={handleChange}
                    keyValue={'adress'}
                    value={state.editing.adress}
                />
                <ReferencePointInput
                    handleChange={handleChange}
                    keyValue={'reference'}
                    value={state.editing.reference}
                />
            </div>
        </div>
    )
}

export default ContainerAdressWithPlusButton
