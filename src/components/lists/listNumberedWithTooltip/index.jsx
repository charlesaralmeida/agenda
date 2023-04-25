import React from 'react'
import PropTypes from 'prop-types'
import IconsFontAwesome from 'components/icons/iconsFontAwesome'
import { object } from 'prop-types'
import './style.css'
import { ICONS, COLORS } from 'utils/constants'

const ListNumberedWithTooltip = ({ list, handleClick }) => {
    const icon = {
        name: ICONS.CIRCLE_X_MARK,
        size: '1.2em',
        color: COLORS.RED,
    }
    return (
        <div
            role="ContainerListNumberedWithTooltip"
            className="container-list-numbered-with-tooltip"
        >
            {list.map((item, index) => (
                <div
                    key={index}
                    className="container-list-item-numbered-with-tooltip"
                >
                    <span className="list-item-numbered-with-tooltip">
                        ({index + 1}...)
                    </span>
                    <span className="tooltip-list-item-numbered-with-tooltip">
                        {item}
                    </span>
                    <span
                        className="close-list-item-numbered-with-tooltip"
                        onClick={() => handleClick(index)}
                    >
                        <IconsFontAwesome
                            name={icon.name}
                            size={icon.size}
                            color={icon.color}
                        />
                    </span>
                </div>
            ))}
        </div>
    )
}

ListNumberedWithTooltip.propTypes = {
    list: PropTypes.arrayOf(String).isRequired,
}

export default ListNumberedWithTooltip
