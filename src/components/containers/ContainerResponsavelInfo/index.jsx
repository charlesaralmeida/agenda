import React from 'react'
import TitleContainer from 'components/containers/titleContainer'
import SubLabel from 'components/sublabels'
import { LABELS, SUBLABELS } from 'utils/constants'
import ButtonBackNavigation from 'components/buttons/ButtonBackNavigation'
import ButtonFowardNavigation from 'components/buttons/ButtonFowardNavigation'
import ResponsavelInfo from 'components/containers/ResponsavelInfo'
import ListNumberedWithTooltip from 'components/lists/listNumberedWithTooltip'
import './style.css'
import useLogic from './useLogic'
import ModalError from '../../modals/ModalError'

const ContainerResponsavelInfo = () => {
    const {
        getResponsavelList,
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        handleChangeDocumentType,
        addResp,
        removeResp,
        responsavelInfoState,
    } = useLogic()

    return (
        <div
            role="container-responsavel-info"
            className="container-responsavel-info"
        >
            <ButtonBackNavigation handleClick={handleBackClick} />
            <div
                role="main-content-responsavel-info"
                className="main-content-responsavel-info"
            >
                <div
                    className="title-responsavel-info"
                    role="title-responsavel-info"
                >
                    <TitleContainer
                        text={LABELS.PASSAGEIRO_RESPONSAVEL}
                        children={
                            <div role="sub-label" className="sub-label">
                                <SubLabel
                                    text={SUBLABELS.PASSAGEIRO_RESPONSAVEL}
                                />
                                <div role="list-numbered-with-tooltip">
                                    <ListNumberedWithTooltip
                                        handleClick={removeResp}
                                        list={getResponsavelList()}
                                    />
                                </div>
                            </div>
                        }
                    />
                </div>
                <div
                    className="input-responsavel-info"
                    role="input-responsavel-info"
                >
                    <ResponsavelInfo
                        handleChange={handleChangeInfo}
                        handleChangeDocumentType={handleChangeDocumentType}
                        state={responsavelInfoState}
                        addResponsavel={addResp}
                    />
                    <ModalError />
                </div>
            </div>
            <ButtonFowardNavigation handleClick={handleForwardClick} />
        </div>
    )
}

export default ContainerResponsavelInfo
