import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ text }) => {
    return <span className="Label">{text}</span>
}

Label.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Label
