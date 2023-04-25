import { useState } from 'react'
import * as xlsx from 'xlsx'
import { MESSAGES } from 'utils/constants'
import { equalsArrays } from '../../../../utils'
import { VALID_SHEET_HEADERS } from '../../../../utils/constants'

const useLogic = () => {
    const [fileSelected, setFileSelected] = useState('')

    const dragOver = (e) => {
        e.preventDefault()
        e.target.classList.add('upload-container-active')
    }

    const dragLeave = (e) => {
        e.target.classList.remove('upload-container-active')
    }

    const drop = (e) => {
        e.preventDefault()
        let filetype = e.dataTransfer.files[0].type
        let validtype = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-excel',
        ]
        if (validtype.includes(filetype)) {
            setFileSelected(e.dataTransfer.files[0])
            return readUploadFile(e.dataTransfer.files[0])
        } else {
            let error = {
                TITLE: MESSAGES.ERROR.FILE_UPLOAD_TYPE.TITLE,
                TEXT: MESSAGES.ERROR.FILE_UPLOAD_TYPE.TEXT,
            }
            return new Promise((resolve, reject) => reject(error))
        }
    }

    const readUploadFile = (file) => {
        if (file)
            return new Promise((resolve, reject) => {
                setFileSelected(file)
                readSheet(file)
                    .then((data) => resolve(data))
                    .catch((error) => reject(error))
            })
    }

    const readSheet = (file) => {
        if (file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onload = (readResult) => {
                    const data = readResult.target.result
                    const workbook = xlsx.read(data, { type: 'array' })
                    const sheetName = workbook.SheetNames[0]
                    const worksheet = workbook.Sheets[sheetName]
                    const json = xlsx.utils.sheet_to_json(worksheet)
                    if (
                        equalsArrays(
                            Object.keys(json[0]),
                            VALID_SHEET_HEADERS.PASSENGERS_SHEET
                        )
                    )
                        resolve(json)
                    else {
                        let error = {
                            TITLE: MESSAGES.ERROR.FILE_UPLOAD_TYPE.TITLE,
                            TEXT: MESSAGES.ERROR.FILE_UPLOAD_TYPE.TEXT,
                        }
                        reject(error)
                    }
                }
                reader.onerror = () => {
                    let error = {
                        TITLE: MESSAGES.ERROR.FILE_READ.TITLE,
                        TEXT: MESSAGES.ERROR.FILE_READ.TEXT,
                    }
                    reject(error)
                }
                reader.readAsArrayBuffer(file)
            })
        }
    }

    const clearFile = () => {
        setFileSelected('')
    }

    return {
        dragOver,
        dragLeave,
        drop,
        fileSelected,
        setFileSelected,
        readUploadFile,
        clearFile,
    }
}

export default useLogic
