import React from 'react'
import './style.css'
import FundOptionSelect from '../../selects/FundOptionSelect'
import RetiradaDateInput from '../../inputs/RetiradaDateInput'
import DevolucaoDateInput from '../../inputs/DevolucaoDateInput'

const OtherInfoEmprestimo = ({ handleChange, otherInfoState }) => {
    return (
        <div role="other-info-emprestimo" className="other-info-emprestimo">
            <div className="fund-option-container-emprestimo">
                <FundOptionSelect
                    handleChange={handleChange}
                    state={otherInfoState}
                />
            </div>
            <div className="date-container-emprestimo">
                <RetiradaDateInput
                    handleChange={handleChange}
                    keyValue={'retiradaDate'}
                    state={otherInfoState.editing.retiradaDate}
                />
                <DevolucaoDateInput
                    handleChange={handleChange}
                    keyValue={'devolucaoDate'}
                    state={otherInfoState.editing.devolucaoDate}
                />
            </div>
        </div>
    )
}

export default OtherInfoEmprestimo
