import React from 'react'
import IconsFontAwesome from 'components/icons/iconsFontAwesome'
import { ICONS, COLORS } from 'utils/constants'
import './style.css'

const ButtonCheckInformations = ({ handleClick }) => {
    const Icon = (
        <IconsFontAwesome
            name={ICONS.CIRCLE_ARROW_LEFT}
            size="2.8em"
            color={COLORS.RED}
            handleClick={handleClick}
        />
    )

    return (
        <div
            className="button-check-informations"
            role="button-check-informations"
        >
            <div role="icon" className="icon-container">
                {Icon}
            </div>
        </div>
    )
}

export default ButtonCheckInformations
