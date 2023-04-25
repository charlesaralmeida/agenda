import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import ptBR from 'date-fns/locale/pt'
import './style.css'

const QuantityTimeInput = ({ handleChange, keyValue, value }) => {
    return (
        <div role="quantity-time-input" className="quantity-time-input">
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={ptBR}
            >
                <div role="date-field">
                    <TimePicker
                        label="Quantidade"
                        value={Date.parse(value)}
                        onChange={(newValue) => {
                            handleChange(keyValue, newValue.toString())
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </div>
            </LocalizationProvider>
        </div>
    )
}

export default QuantityTimeInput
