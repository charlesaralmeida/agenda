import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import './style.css'

const FundOptionSelect = ({ handleChange, state }) => {
    return (
        <div role="fund-option-select" className="fund-option-select">
            <FormControl fullWidth>
                <InputLabel id="fund-option-select-label">Recurso</InputLabel>
                <Select
                    labelId="fund-option-select-label"
                    id="fund-option-select"
                    value={state.fund}
                    label="Recurso"
                    onChange={(event) =>
                        handleChange('fund', event.target.value)
                    }
                >
                    {state.fundList.map((fund, index) => (
                        <MenuItem key={index} value={index}>
                            {fund}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default FundOptionSelect
