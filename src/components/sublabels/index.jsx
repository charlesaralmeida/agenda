import React from 'react'
import PropTypes from 'prop-types'

const SubLabel = ({ text }) => {
    return <span className="SubLabel">{text}</span>
}

SubLabel.propTypes = {
    text: PropTypes.string.isRequired,
}

export default SubLabel
