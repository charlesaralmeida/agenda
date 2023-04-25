import React from 'react'
import IconsFontAwesome from 'components/icons/iconsFontAwesome'
import { ICONS, COLORS } from 'utils/constants'
import './style.css'

const ButtonPlus = ({ handleClick }) => {
    const Icon = (
        <IconsFontAwesome
            name={ICONS.CIRCLE_PLUS}
            size="2.3em"
            color={COLORS.RED}
            handleClick={handleClick}
        />
    )

    return (
        <div className="button-plus" role="button-plus">
            {Icon}
        </div>
    )
}

export default ButtonPlus
