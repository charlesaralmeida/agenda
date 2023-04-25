import { TextField } from '@mui/material'
import './style.css'

const TripReasonInput = ({ handleChange, keyValue, state }) => {
    return (
        <div role="adress-input" className="adress-input">
            <TextField
                fullWidth
                label="Finalidade"
                value={state}
                helperText="Informe brevemente a justificativa da viagem"
                onChange={(event) => handleChange(keyValue, event.target.value)}
            />
        </div>
    )
}

export default TripReasonInput
