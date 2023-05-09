import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import styles from './style.css'

const DestinoSelect = ({ handleChange, keyValue, value, destinosList }) => {
    const getOptionInicial = () => {
        let result = destinosList.inicial.adress ? (
            <MenuItem key={'inicial'} value={'embarque'}>
                {'Endereço inicial: ' + destinosList.inicial.adress}
            </MenuItem>
        ) : null
        return result
    }

    const getOptionsInter = () => {
        let result = destinosList.inter.map((destino, index) => {
            return destino.adress ? (
                <MenuItem key={'inter' + index} value={index}>
                    {'Intermediário(' + (index + 1) + '): ' + destino.adress}
                </MenuItem>
            ) : null
        })
        return result
    }

    const getOptionFinal = () => {
        let result = destinosList.final.adress ? (
            <MenuItem key={'final'} value={'destino'}>
                {'Destino final: ' + destinosList.final.adress}
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
                <InputLabel id="select-label">
                    Selecione o local de embarque
                </InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    value={value}
                    label="Selecione o local de embarque"
                    onChange={(event) =>
                        handleChange(keyValue, event.target.value)
                    }
                >
                    <MenuItem key={'null'} value={''} />
                    {getOptions()}
                </Select>
            </FormControl>
        </div>
    )
}

export default DestinoSelect
