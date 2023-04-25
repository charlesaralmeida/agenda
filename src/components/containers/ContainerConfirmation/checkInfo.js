import { MESSAGES, TRANSPORT_TYPE } from 'utils/constants'
import { checkDate, checkTime, checkReturnDate, checkReturnTime } from 'utils'
import { useDispatch } from 'react-redux'
import {
    setPassengersWarned,
    setIntermediateDestinationWarned,
} from 'redux/slices/agendar'

export const useCheckInfo = () => {
    let dispatch = useDispatch()

    const checkPassengerWithCarOrKombi = (tripState) => {
        return new Promise((resolve, reject) => {
            checkBoardingInfo(tripState)
                .then(() => {
                    checkIntermediateDestinationInfo(tripState)
                        .then(() => {
                            checkFinalDestinationInfo(tripState)
                                .then(() => {
                                    checkPassengersInfo(tripState)
                                        .then(() => {
                                            checkOtherInfo(tripState)
                                                .then(() => resolve(true))
                                                .catch((error) => reject(error))
                                        })
                                        .catch((error) => {
                                            dispatch(setPassengersWarned())
                                            reject(error)
                                        })
                                })
                                .catch((error) => reject(error))
                        })
                        .catch((error) => {
                            dispatch(setIntermediateDestinationWarned())
                            reject(error)
                        })
                })
                .catch((error) => reject(error))
        })
    }

    const checkPassengerWithVanOrBus = (tripState) => {
        return new Promise((resolve, reject) => {
            checkBoardingInfo(tripState)
                .then(() => {
                    checkIntermediateDestinationInfo(tripState)
                        .then(() => {
                            checkFinalDestinationInfo(tripState)
                                .then(() => {
                                    checkResponsavelInfo(tripState)
                                        .then(() => {
                                            checkOtherInfo(tripState)
                                                .then(() => resolve(true))
                                                .catch((error) => reject(error))
                                        })
                                        .catch((error) => reject(error))
                                })
                                .catch((error) => reject(error))
                        })
                        .catch((error) => {
                            dispatch(setIntermediateDestinationWarned())
                            reject(error)
                        })
                })
                .catch((error) => reject(error))
        })
    }

    const checkCargo = (tripState) => {
        return new Promise((resolve, reject) => {
            checkBoardingInfo(tripState)
                .then(() => {
                    checkFinalDestinationInfo(tripState)
                        .then(() => {
                            checkOtherInfo(tripState)
                                .then(() => resolve(true))
                                .catch((error) => reject(error))
                        })
                        .catch((error) => reject(error))
                })
                .catch((error) => reject(error))
        })
    }

    const checkEmprestimo = (tripState) => {
        return new Promise((resolve, reject) => {
            checkOtherInfoEmprestimo(tripState)
                .then(() => resolve(true))
                .catch((error) => reject(error))
        })
    }

    return {
        checkPassengerWithCarOrKombi,
        checkPassengerWithVanOrBus,
        checkCargo,
        checkEmprestimo,
    }
}

const checkBoardingInfo = (tripState) => {
    return new Promise((resolve, reject) => {
        let boardingInfo = tripState.boardingInfo
        let adress = boardingInfo.adress
        let date = new Date(boardingInfo.date)
        let time = new Date(boardingInfo.time)
        let uf = boardingInfo.uf
        let city = boardingInfo.city

        let MSG_ERROR = {}
        if (tripState.transportType === TRANSPORT_TYPE.PASSAGEIRO)
            MSG_ERROR = {
                DATA: MESSAGES.ERROR.DATA_EMBARQUE,
                HORA: MESSAGES.ERROR.HORA_EMBARQUE,
                UF: MESSAGES.ERROR.UF_EMBARQUE,
                CIDADE: MESSAGES.ERROR.CIDADE_EMBARQUE,
                ENDERECO: MESSAGES.ERROR.ENDERECO_EMBARQUE,
            }
        else
            MSG_ERROR = {
                DATA: MESSAGES.ERROR.DATA_RETIRADA,
                HORA: MESSAGES.ERROR.HORA_RETIRADA,
                UF: MESSAGES.ERROR.UF_RETIRADA,
                CIDADE: MESSAGES.ERROR.CIDADE_RETIRADA,
                ENDERECO: MESSAGES.ERROR.ENDERECO_RETIRADA,
            }

        if (!checkDate(date)) reject(MSG_ERROR.DATA)
        if (!checkTime(date, time)) reject(MSG_ERROR.HORA)
        if (!uf) reject(MSG_ERROR.UF)
        if (!city) reject(MSG_ERROR.CIDADE)
        if (!adress) reject(MSG_ERROR.ENDERECO)

        resolve()
    })
}

const checkIntermediateDestinationInfo = (tripState) => {
    return new Promise((resolve, reject) => {
        let warned = tripState.intermediateDestinationInfo.warned
        if (warned) resolve()

        let adress = tripState.intermediateDestinationInfo.editing.adress
        let reference = tripState.intermediateDestinationInfo.editing.reference
        let estimatedTime =
            new Date(
                tripState.intermediateDestinationInfo.editing.estimatedTime
            ).getHours() +
            new Date(
                tripState.intermediateDestinationInfo.editing.estimatedTime
            ).getMinutes()
        let estimatedDays = parseInt(
            tripState.intermediateDestinationInfo.editing.estimatedDays
        )

        if (adress || reference || estimatedTime || estimatedDays)
            reject(MESSAGES.ERROR.DESTINO_INTERMEDIARIO_CONFIRMACAO)

        resolve()
    })
}

const checkFinalDestinationInfo = (tripState) => {
    return new Promise((resolve, reject) => {
        let finalDestinationInfo = tripState.finalDestinationInfo
        let uf = finalDestinationInfo.uf
        let city = finalDestinationInfo.city
        let adress = finalDestinationInfo.adress

        let MSG_ERROR = {}
        if (tripState.transportType === TRANSPORT_TYPE.PASSAGEIRO)
            MSG_ERROR = {
                UF: MESSAGES.ERROR.UF_FINAL,
                CIDADE: MESSAGES.ERROR.CIDADE_FINAL,
                ENDERECO: MESSAGES.ERROR.ENDERECO_FINAL,
            }
        else
            MSG_ERROR = {
                UF: MESSAGES.ERROR.UF_ENTREGA,
                CIDADE: MESSAGES.ERROR.CIDADE_ENTREGA,
                ENDERECO: MESSAGES.ERROR.ENDERECO_ENTREGA,
            }

        if (!uf) reject(MSG_ERROR.UF)
        if (!city) reject(MSG_ERROR.CIDADE)
        if (!adress) reject(MSG_ERROR.ENDERECO)

        resolve()
    })
}

const checkPassengersInfo = (tripState) => {
    return new Promise((resolve, reject) => {
        let warned = tripState.passengersInfo.warned
        if (warned)
            if (tripState.passengersInfo.passengersList.length) resolve()

        let vinculo = tripState.passengersInfo.editing.vinculo
        let nome = tripState.passengersInfo.editing.name
        let documento = tripState.passengersInfo.editing.documentNumber
        let fone = tripState.passengersInfo.editing.phone

        if (vinculo || nome || documento || fone)
            if (tripState.passengersInfo.passengersList.length)
                reject(MESSAGES.ERROR.PASSAGEIRO_CONFIRMACAO)
            else reject(MESSAGES.ERROR.PASSAGEIRO_CONFIRMACAO_NENHUM_PASSAGEIRO)

        if (!tripState.passengersInfo.passengersList.length)
            reject(MESSAGES.ERROR.NENHUM_PASSAGEIRO)

        resolve()
    })
}

const checkResponsavelInfo = (tripState) => {
    return new Promise((resolve, reject) => {
        //se já tiver lista de passageiro, precisa definir quem é o passageiro responsável
        if (tripState.passengersSheetList.length) {
            let vinculo = tripState.responsavelInfo.editing.vinculo
            let nome = tripState.responsavelInfo.editing.name
            let documento = tripState.responsavelInfo.editing.documentNumber
            let fone = tripState.responsavelInfo.editing.phone

            if (vinculo || nome || documento || fone)
                if (tripState.responsavelInfo.responsavelList.length)
                    reject(MESSAGES.ERROR.RESPONSAVEL_CONFIRMACAO)
                else
                    reject(
                        MESSAGES.ERROR
                            .RESPONSAVEL_CONFIRMACAO_NENHUM_RESPONSAVEL
                    )

            if (!tripState.responsavelInfo.responsavelList.length)
                reject(MESSAGES.ERROR.NENHUM_RESPONSAVEL)

            resolve()
        } else resolve()
    })
}

const checkOtherInfo = (tripState) => {
    return new Promise((resolve, reject) => {
        let retorno = tripState.otherInfo.editing.return
        let boardingDate = new Date(tripState.boardingInfo.date)
        let boardingTime = new Date(tripState.boardingInfo.time)
        let returnDate = new Date(tripState.otherInfo.editing.returnDate)
        let returnTime = new Date(tripState.otherInfo.editing.returnTime)
        let tripReason = tripState.otherInfo.editing.tripReason

        let MSG_ERROR = {}
        if (tripState.transportType === TRANSPORT_TYPE.PASSAGEIRO)
            MSG_ERROR = {
                DATA: MESSAGES.ERROR.DATA_RETORNO,
                HORA: MESSAGES.ERROR.HORA_RETORNO,
                FINALIDADE: MESSAGES.ERROR.FINALIDADE_VIAGEM,
            }
        else
            MSG_ERROR = {
                DATA: MESSAGES.ERROR.DATA_RETORNO_CARGO,
                HORA: MESSAGES.ERROR.HORA_RETORNO_CARGO,
                FINALIDADE: MESSAGES.ERROR.FINALIDADE_VIAGEM_CARGO,
            }

        if (retorno) {
            if (!checkReturnDate(boardingDate, returnDate))
                reject(MSG_ERROR.DATA)

            if (
                !checkReturnTime(
                    boardingDate,
                    returnDate,
                    boardingTime,
                    returnTime
                )
            )
                reject(MSG_ERROR.HORA)
        }

        if (!tripReason) reject(MSG_ERROR.FINALIDADE)

        resolve()
    })
}

const checkOtherInfoEmprestimo = (tripState) => {
    return new Promise((resolve, reject) => {
        let retiradaDate = new Date(tripState.otherInfo.editing.retiradaDate)
        let devolucaoDate = new Date(tripState.otherInfo.editing.devolucaoDate)

        if (!retiradaDate) reject(MESSAGES.ERROR.DATA_RETIRADA_EMPRESTIMO_VAZIA)

        if (!devolucaoDate)
            reject(MESSAGES.ERROR.DATA_DEVOLUCAO_EMPRESTIMO_VAZIA)

        if (!checkReturnDate(retiradaDate, devolucaoDate))
            reject(MESSAGES.ERROR.DATA_DEVOLUCAO_EMPRESTIMO)

        resolve()
    })
}
