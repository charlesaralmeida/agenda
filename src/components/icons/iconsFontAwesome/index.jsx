import React from 'react'
import Icons from './getIcons'
import PropTypes from 'prop-types'
import { ICONS } from 'utils/constants'

const IconsFontAwesome = ({ name, size, color, handleClick }) => {
    switch (name) {
        //tipo de transporte
        case ICONS.PERSON: {
            return (
                <Icons.FaPerson
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.CUBE: {
            return (
                <Icons.FaCube
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.FILE_LINES: {
            return (
                <Icons.FaFileLines
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.PLANE: {
            return (
                <Icons.FaPlane
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.CAR: {
            return (
                <Icons.FaCar
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        //tipo de veiculos
        case ICONS.KOMBI: {
            return (
                <Icons.FaTruckField
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.FURGAO: {
            return (
                <Icons.FaTruck
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.VAN: {
            return (
                <Icons.FaVanShuttle
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.BUS: {
            return (
                <Icons.FaBus
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.BUS_SIMPLE: {
            return (
                <Icons.FaBusSimple
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        //arrows navigation
        case ICONS.CIRCLE_ARROW_LEFT: {
            return (
                <Icons.FaCircleArrowLeft
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.CIRCLE_ARROW_RIGHT: {
            return (
                <Icons.FaCircleArrowRight
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.CIRCLE_X_MARK: {
            return (
                <Icons.FaCircleXmark
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.CIRCLE_PLUS: {
            return (
                <Icons.FaCirclePlus
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        case ICONS.SQUARE_CHECK: {
            return (
                <Icons.FaSquareCheck
                    size={size}
                    color={color}
                    handleClick={handleClick}
                />
            )
        }
        default:
            return <div></div>
    }
}

IconsFontAwesome.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default IconsFontAwesome
