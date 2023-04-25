import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import './style.css'
import { UF } from 'utils/cidades'

const CityInput = ({ handleChange, keyValue, uf, value }) => {
    return (
        <div role="city-input" className="city-input">
            <FormControl fullWidth>
                <InputLabel id="city-select-label">Cidade</InputLabel>
                <Select
                    labelId="city-select-label"
                    id="city-select"
                    value={value}
                    label="Cidade"
                    onChange={(event) =>
                        handleChange(keyValue, event.target.value)
                    }
                >
                    {UF[uf].map((cidade, index) => (
                        <MenuItem value={cidade} key={index}>
                            {cidade}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default CityInput
