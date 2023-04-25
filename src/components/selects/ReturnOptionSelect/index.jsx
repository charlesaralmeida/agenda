import { useState } from 'react'
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import './style.css'

const ReturnOptionSelect = ({ handleChange, state }) => {
    return (
        <div role="return-option-select" className="return-option-select">
            <FormControl fullWidth>
                <InputLabel id="return-option-select-label">
                    Aguardar retorno?
                </InputLabel>
                <Select
                    labelId="return-option-select-label"
                    id="return-option-select-select"
                    value={state}
                    label="Aguardar Retorno?"
                    onChange={(event) =>
                        handleChange('return', event.target.value)
                    }
                >
                    <MenuItem value={true}>Sim</MenuItem>
                    <MenuItem value={false}>Não</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default ReturnOptionSelect
