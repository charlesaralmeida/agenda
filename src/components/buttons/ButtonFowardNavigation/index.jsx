import React from 'react'
import IconsFontAwesome from 'components/icons/iconsFontAwesome'
import { ICONS, COLORS } from 'utils/constants'
import './style.css'

const ButtonFowardNavigation = ({ handleClick }) => {
    const Icon = (
        <IconsFontAwesome
            name={ICONS.CIRCLE_ARROW_RIGHT}
            size="2.8em"
            color={COLORS.PRIMARY}
            handleClick={handleClick}
        />
    )

    return (
        <div
            className="button-foward-navigation"
            role="button-foward-navigation"
        >
            <div role="icon" className="icon-container">
                {Icon}
            </div>
        </div>
    )
}

export default ButtonFowardNavigation
