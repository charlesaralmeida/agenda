import { useState } from 'react'
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import './style.css'

const HourOrDaySelect = ({ handleChange, keyValue, value }) => {
    return (
        <div role="hour-or-day-select" className="hour-or-day-select">
            <FormControl fullWidth>
                <InputLabel id="hour-or-day-select-label">
                    Horas ou dias
                </InputLabel>
                <Select
                    labelId="hour-or-day-select-label"
                    id="hour-or-day-select"
                    value={value}
                    label="Horas ou dias"
                    onChange={(event) =>
                        handleChange(keyValue, event.target.value)
                    }
                >
                    <MenuItem value="Horas">Horas</MenuItem>
                    <MenuItem value="Dias">Dias</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default HourOrDaySelect
