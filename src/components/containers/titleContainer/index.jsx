import React from 'react'
import Label from 'components/labels'
import PropTypes from 'prop-types'
import './style.css'

const TitleContainer = ({ text, children }) => {
    return (
        <div className="title-container">
            <Label text={text} />
            {children}
        </div>
    )
}

TitleContainer.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.element,
}

export default TitleContainer
