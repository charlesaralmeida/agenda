import { TextField } from '@mui/material'
import './style.css'
import { useLogic } from './useLogic'

const PhoneInput = ({ handleChange, keyValue, value }) => {
    const { formatPhoneNumber } = useLogic()

    return (
        <div role="phone-input" className="phone-input">
            <TextField
                fullWidth
                label="Telefone"
                value={value}
                onChange={(event) => {
                    event.target.value = formatPhoneNumber(event.target.value)
                    handleChange(keyValue, event.target.value)
                }}
            />
        </div>
    )
}

export default PhoneInput
