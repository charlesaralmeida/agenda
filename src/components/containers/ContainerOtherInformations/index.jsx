import React from 'react'
import TitleContainer from 'components/containers/titleContainer'
import { LABELS } from 'utils/constants'
import ButtonBackNavigation from 'components/buttons/ButtonBackNavigation'
import ButtonFowardNavigation from 'components/buttons/ButtonFowardNavigation'
import OtherInfo from 'components/containers/OtherInfo'
import './style.css'
import useLogic from './useLogic'
import { TRANSPORT_TYPE } from '../../../utils/constants'
import OtherInfoEmprestimo from '../OtherInfoEmprestimo'

const ContainerOtherInformations = () => {
    const {
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        otherInfoState,
        transportType,
    } = useLogic()

    return (
        <div role="container-other-info" className="container-other-info">
            <ButtonBackNavigation handleClick={handleBackClick} />
            <div
                role="main-content-other-info"
                className="main-content-other-info"
            >
                <div className="title-other-info" role="title-other-info">
                    <TitleContainer text={LABELS.OTHER_INFO} />
                </div>
                <div className="input-other-info" role="input-other-info">
                    {transportType === TRANSPORT_TYPE.EMPRESTIMO ? (
                        <OtherInfoEmprestimo
                            handleChange={handleChangeInfo}
                            otherInfoState={otherInfoState}
                        />
                    ) : (
                        <OtherInfo
                            handleChange={handleChangeInfo}
                            otherInfoState={otherInfoState}
                        />
                    )}
                </div>
            </div>
            <ButtonFowardNavigation handleClick={handleForwardClick} />
        </div>
    )
}

export default ContainerOtherInformations
