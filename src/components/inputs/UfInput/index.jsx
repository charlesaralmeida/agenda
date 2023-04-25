import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import './style.css'

const UfInput = ({ handleChange, keyValue, value }) => {
    return (
        <div role="uf-input" className="uf-input">
            <FormControl fullWidth>
                <InputLabel id="uf-select-label">UF</InputLabel>
                <Select
                    labelId="uf-select-label"
                    id="uf-select"
                    value={value}
                    label="UF"
                    onChange={(event) =>
                        handleChange(keyValue, event.target.value)
                    }
                >
                    <MenuItem value="AC">AC</MenuItem>
                    <MenuItem value="AL">AL</MenuItem>
                    <MenuItem value="AM">AM</MenuItem>
                    <MenuItem value="AP">AP</MenuItem>
                    <MenuItem value="BA">BA</MenuItem>
                    <MenuItem value="CE">CE</MenuItem>
                    <MenuItem value="DF">DF</MenuItem>
                    <MenuItem value="ES">ES</MenuItem>
                    <MenuItem value="GO">GO</MenuItem>
                    <MenuItem value="MA">MA</MenuItem>
                    <MenuItem value="MG">MG</MenuItem>
                    <MenuItem value="MS">MS</MenuItem>
                    <MenuItem value="MT">MT</MenuItem>
                    <MenuItem value="PA">PA</MenuItem>
                    <MenuItem value="PB">PB</MenuItem>
                    <MenuItem value="PE">PE</MenuItem>
                    <MenuItem value="PI">PI</MenuItem>
                    <MenuItem value="PR">PR</MenuItem>
                    <MenuItem value="RJ">RJ</MenuItem>
                    <MenuItem value="RN">RN</MenuItem>
                    <MenuItem value="RO">RO</MenuItem>
                    <MenuItem value="RR">RR</MenuItem>
                    <MenuItem value="RS">RS</MenuItem>
                    <MenuItem value="SC">SC</MenuItem>
                    <MenuItem value="SE">SE</MenuItem>
                    <MenuItem value="SP">SP</MenuItem>
                    <MenuItem value="TO">TO</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default UfInput
