import { TextField } from '@mui/material'
import { VINCULO_TYPE } from 'utils/constants'
import './style.css'

const DocumentNumberInput = ({
    handleChange,
    keyValue,
    documentType,
    value,
}) => {
    return (
        <div role="document-number-input" className="document-number-input">
            <TextField
                fullWidth
                label={documentType}
                value={value}
                onChange={(event) => handleChange(keyValue, event.target.value)}
            />
        </div>
    )
}

export default DocumentNumberInput
