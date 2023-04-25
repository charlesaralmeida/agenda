import { VINCULO_TYPE_RESPONSAVEL } from 'utils/constants'
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import './style.css'

const ResponsavelTypeSelect = ({
    handleChangeValue,
    handleChangeDocumentType,
    keyValue,
    value,
}) => {
    return (
        <div role="responsavel-type-input" className="responsavel-type-input">
            <FormControl fullWidth>
                <InputLabel id="responsavel-type-select-label">
                    Vínculo
                </InputLabel>
                <Select
                    labelId="responsavel-type-select-label"
                    id="responsavel-type-select"
                    role="responsavel-type-select"
                    value={value}
                    label="Vínculo"
                    onChange={(event) => {
                        handleChangeValue(keyValue, event.target.value)
                        handleChangeDocumentType(event.target.value)
                    }}
                >
                    {Object.keys(VINCULO_TYPE_RESPONSAVEL).map(
                        (type, index) => (
                            <MenuItem
                                value={VINCULO_TYPE_RESPONSAVEL[type]}
                                key={index}
                            >
                                {VINCULO_TYPE_RESPONSAVEL[type]}
                            </MenuItem>
                        )
                    )}
                </Select>
            </FormControl>
        </div>
    )
}

export default ResponsavelTypeSelect
