import AdressInput from '../../inputs/AdressInput'
import CityInput from '../../inputs/CityInput'
import ReferencePointInput from '../../inputs/ReferencePointInput'
import UfInput from '../../inputs/UfInput'
import './style.css'

const ContainerAdress = ({ handleChange, state }) => {
    return (
        <div role="container-adress" className="container-adress">
            <span role="container-adress-label">Endereço</span>
            <div
                className="container-city-uf-input"
                role="container-city-uf-input"
            >
                <UfInput
                    handleChange={handleChange}
                    keyValue={'uf'}
                    value={state.uf}
                />
                <CityInput
                    handleChange={handleChange}
                    keyValue={'city'}
                    uf={state.uf}
                    value={state.city}
                />
            </div>
            <div
                className="container-adress-input"
                role="container-adress-input"
            >
                <AdressInput
                    handleChange={handleChange}
                    keyValue={'adress'}
                    value={state.adress}
                />
                {/* <ReferencePointInpu
                    handleChange={handleChange}
                    keyValue={'reference'}
                    value={state.reference}
                /> */}
            </div>
        </div>
    )
}

export default ContainerAdress
