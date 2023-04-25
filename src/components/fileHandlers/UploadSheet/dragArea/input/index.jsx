import { useEffect } from 'react'
import '../../style.css'

const Input = ({ readUploadFile, fileSelected }) => {
    useEffect(() => {
        if (!fileSelected) {
            document.getElementById('input-file').value = ''
        }
    }, [fileSelected])

    return (
        <>
            <h4>Solte a planilha aqui</h4>
            <br />
            <span>ou</span>
            <br />
            <label className="button" htmlFor="input-file">
                Clique para selecionar
            </label>
            <input
                className="input-upload-file"
                id="input-file"
                type="file"
                accept=".xls,.xlsx"
                onChange={readUploadFile}
            />
            <span>{fileSelected.name}</span>
        </>
    )
}

export default Input
