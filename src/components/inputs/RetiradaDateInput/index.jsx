import React from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import ptBR from 'date-fns/locale/pt'
import './style.css'

const RetiradaDateInput = ({ handleChange, keyValue, state }) => {
    return (
        <div role="retirada-date-input" className="retirada-date-input">
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={ptBR}
            >
                <div role="retirada-date-field">
                    <DatePicker
                        label="Data de retirada"
                        value={state}
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

export default RetiradaDateInput
