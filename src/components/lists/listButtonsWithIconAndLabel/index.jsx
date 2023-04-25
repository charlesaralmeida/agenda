import React from 'react'
import PropTypes from 'prop-types'
import ButtonWithIconAndLabel from 'components/buttons/ButtonWithIconAndLabel'
import { object } from 'prop-types'

const ListButtonWithIconAndLabel = ({ list, handleClick }) => {
    return (
        <>
            {list.map((buttonProps, index) => (
                <div role="ButtonWithIconAndLabel" key={index}>
                    <ButtonWithIconAndLabel
                        icon={buttonProps.icon}
                        label={buttonProps.label}
                        handleClick={() => handleClick(buttonProps.id)}
                    />
                </div>
            ))}
        </>
    )
}

ListButtonWithIconAndLabel.propTypes = {
    list: PropTypes.arrayOf(object).isRequired,
}

export default ListButtonWithIconAndLabel
