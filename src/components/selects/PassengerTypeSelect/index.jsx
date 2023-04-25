import { VINCULO_TYPE } from 'utils/constants'
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import './style.css'

const DocumentTypeSelect = ({
    handleChangeValue,
    handleChangeDocumentType,
    keyValue,
    value,
}) => {
    return (
        <div role="passenger-type-input" className="passenger-type-input">
            <FormControl fullWidth>
                <InputLabel id="passenger-type-select-label">
                    Vínculo
                </InputLabel>
                <Select
                    labelId="passenger-type-select-label"
                    id="passenger-type-select"
                    role="passenger-type-select"
                    value={value}
                    label="Vínculo"
                    onChange={(event) => {
                        handleChangeValue(keyValue, event.target.value)
                        handleChangeDocumentType(event.target.value)
                    }}
                >
                    {Object.keys(VINCULO_TYPE).map((type, index) => (
                        <MenuItem value={VINCULO_TYPE[type]} key={index}>
                            {VINCULO_TYPE[type]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default DocumentTypeSelect
