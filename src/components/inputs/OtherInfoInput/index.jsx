import { TextField } from '@mui/material'
import './style.css'

const OtherInfoInput = ({ handleChange, keyValue, state }) => {
    return (
        <div role="other-info-input" className="other-info-input">
            <TextField
                fullWidth
                label="Roteiro/Outras Informações"
                multiline
                rows={4}
                value={state}
                onChange={(event) => handleChange(keyValue, event.target.value)}
            />
        </div>
    )
}

export default OtherInfoInput
