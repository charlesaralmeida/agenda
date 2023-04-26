import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import styles from './style.css'

const DestinoSelect = ({ handleChange, keyValue, destinosList }) => {
    const getOptionInicial = () => {
        let result = destinosList.inicial.adress ? (
            <MenuItem value={'embarque'}>
                {'Embarque: ' + destinosList.inicial.adress}
            </MenuItem>
        ) : null
        return result
    }

    const getOptionsInter = () => {
        let result = destinosList.inter.map((destino, index) => {
            index = index + 1
            return destino.adress ? (
                <MenuItem key={index} value={index}>
                    {'Intermediário(' + index + '): ' + destino.adress}
                </MenuItem>
            ) : null
        })
        return result
    }

    const getOptionFinal = () => {
        let result = destinosList.final.adress ? (
            <MenuItem value={'destino'}>
                {'Destino: ' + destinosList.final.adress}
            </MenuItem>
        ) : null
        return result
    }

    const getOptions = () => {
        let result = [getOptionInicial(), getOptionsInter(), getOptionFinal()]
        return result
    }

    return (
        <div className={styles.Select}>
            <FormControl fullWidth>
                <InputLabel id="select-label">Endereço</InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    value={''}
                    label="Endereço"
                    onChange={(event) =>
                        handleChange(keyValue, event.target.value)
                    }
                >
                    {getOptions()}
                </Select>
            </FormControl>
        </div>
    )
}

export default DestinoSelect
