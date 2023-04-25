import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import ptBR from 'date-fns/locale/pt'
import './style.css'

const ReturnTimeInput = ({ handleChange, keyValue, state }) => {
    return (
        <div role="return-time-input" className="return-time-input">
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={ptBR}
            >
                <div role="time-field">
                    <TimePicker
                        label="Horário previsto"
                        value={state}
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

export default ReturnTimeInput
