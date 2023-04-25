import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import ptBR from 'date-fns/locale/pt'
import './style.css'

const QuantityDayInput = ({ handleChange, keyValue, value }) => {
    return (
        <div role="quantity-day-input" className="quantity-day-input">
            <TextField
                fullWidth
                label="Quantidade"
                value={value}
                onChange={(event) => handleChange(keyValue, event.target.value)}
                type="number"
            />
        </div>
    )
}

export default QuantityDayInput
