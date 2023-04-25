import { TextField } from '@mui/material'
import './style.css'

const NameInput = ({ handleChange, keyValue, value }) => {
    return (
        <div role="name-input" className="name-input">
            <TextField
                fullWidth
                label="Nome"
                value={value}
                onChange={(event) => handleChange(keyValue, event.target.value)}
            />
        </div>
    )
}

export default NameInput
