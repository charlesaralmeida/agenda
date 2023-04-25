import React from 'react'
import IconsFontAwesome from 'components/icons/iconsFontAwesome'
import { ICONS, COLORS } from 'utils/constants'
import './style.css'

const ButtonBackNavigation = ({ handleClick }) => {
    const Icon = (
        <IconsFontAwesome
            name={ICONS.CIRCLE_ARROW_LEFT}
            size="2.8em"
            color={COLORS.PRIMARY}
            handleClick={handleClick}
        />
    )

    return (
        <div className="button-back-navigation" role="button-back-navigation">
            <div role="icon" className="icon-container">
                {Icon}
            </div>
        </div>
    )
}

export default ButtonBackNavigation
