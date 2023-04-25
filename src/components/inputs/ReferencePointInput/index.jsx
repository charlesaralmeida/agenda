import { TextField } from '@mui/material'
import './style.css'

const ReferencePointInput = ({ handleChange, keyValue, value }) => {
    return (
        <div role="reference-point-input" className="reference-point-input">
            <TextField
                fullWidth
                label="Ponto de Referência"
                helperText="Nome do local de embarque e/ou algum estabelecimento próximo"
                value={value}
                onChange={(event) => handleChange(keyValue, event.target.value)}
            />
        </div>
    )
}

export default ReferencePointInput
