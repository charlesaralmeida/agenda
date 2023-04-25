import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import ptBR from 'date-fns/locale/pt'
import './style.css'

const DateInput = ({ handleChange, keyValue, value }) => {
    return (
        <div role="date-input" className="date-input">
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={ptBR}
            >
                <div role="date-field">
                    <DatePicker
                        label="Data"
                        value={Date.parse(value)}
                        inputFormat="dd/MM/yyyy"
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

export default DateInput
