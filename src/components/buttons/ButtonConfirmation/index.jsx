import React from 'react'
import IconsFontAwesome from 'components/icons/iconsFontAwesome'
import { ICONS, COLORS } from 'utils/constants'
import './style.css'

const ButtonConfirmation = ({ handleClick }) => {
    const Icon = (
        <IconsFontAwesome
            name={ICONS.SQUARE_CHECK}
            size="2.8em"
            color={COLORS.GREEN}
            handleClick={handleClick}
        />
    )

    return (
        <div className="button-confirmation" role="button-confirmation">
            <div role="icon" className="icon-container">
                {Icon}
            </div>
        </div>
    )
}

export default ButtonConfirmation
