import React, { useEffect } from 'react'
import TitleContainer from 'components/containers/titleContainer'
import { LABELS, ICONS, COLORS } from 'utils/constants'
import ButtonBackNavigation from 'components/buttons/ButtonBackNavigation'
import ButtonFowardNavigation from 'components/buttons/ButtonFowardNavigation'
import './style.css'
import useLogic from './useLogic'
import UploadSheet from 'components/fileHandlers/UploadSheet'
import planilha_modelo_lista_passageiros from 'files/planilha_lista_passageiros.xlsx'
import ModalMessage from '../../modals/ModalMessage'
import ModalError from '../../modals/ModalError'

const ContainerPassengersSheet = () => {
    const {
        handleBackClick,
        handleForwardClick,
        getDataFromSheet,
        showPassengerList,
        titleModal,
        textModal,
        passengerSheetList,
        clearPassengerList,
    } = useLogic()

    return (
        <div
            role="container-passenger-sheet"
            className="container-passenger-sheet"
        >
            <ButtonBackNavigation handleClick={handleBackClick} />
            <div
                role="main-content-passenger-sheet"
                className="main-content-passenger-sheet"
            >
                <div
                    className="title-passenger-sheet"
                    role="title-passenger-sheet"
                >
                    <TitleContainer text={LABELS.PASSENGERS_LIST} />
                    <span className="title-passenger-sheet-list">
                        {passengerSheetList.length ? (
                            <>
                                <span
                                    onClick={() =>
                                        showPassengerList(passengerSheetList)
                                    }
                                >
                                    Visualizar
                                </span>
                                <span onClick={clearPassengerList}>
                                    Excluir lista
                                </span>
                            </>
                        ) : null}
                    </span>
                </div>
                <div
                    className="input-passenger-sheet"
                    role="input-passenger-sheet"
                >
                    <UploadSheet
                        modelo={planilha_modelo_lista_passageiros}
                        getData={getDataFromSheet}
                    />
                    <ModalMessage />
                    <ModalError />
                </div>
            </div>
            <ButtonFowardNavigation handleClick={handleForwardClick} />
        </div>
    )
}

export default ContainerPassengersSheet
