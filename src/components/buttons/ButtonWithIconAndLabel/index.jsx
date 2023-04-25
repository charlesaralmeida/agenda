import React from 'react'
import IconsFontAwesome from 'components/icons/iconsFontAwesome'
import PropTypes from 'prop-types'
import './style.css'

const ButtonWithIconAndLabel = ({ icon, label, handleClick }) => {
    const Icon = (
        <IconsFontAwesome
            name={icon.name}
            size={icon.size}
            color={icon.color}
        />
    )

    return (
        <button
            className="buttonWithIconAndLabel"
            role="buttonWithIconAndLabel"
            onClick={handleClick}
        >
            <div className="icon">{Icon}</div>
            <div className="label">{label}</div>
        </button>
    )
}

ButtonWithIconAndLabel.propTypes = {
    icon: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
}

export default ButtonWithIconAndLabel
