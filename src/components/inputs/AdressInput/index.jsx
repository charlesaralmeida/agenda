import { TextField } from '@mui/material'
import './style.css'

const AdressInput = ({ handleChange, keyValue, value }) => {
    return (
        <div role="adress-input" className="adress-input">
            <TextField
                fullWidth
                label="Endereço"
                helperText="rua/avenida/praça/nº/etc"
                value={value}
                onChange={(event) => handleChange(keyValue, event.target.value)}
            />
        </div>
    )
}

export default AdressInput
