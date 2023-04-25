import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPerson,
    faCube,
    faFileLines,
    faPlane,
    faCar,
    faTruckField,
    faTruck,
    faVanShuttle,
    faBus,
    faBusSimple,
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faCirclePlus,
    faSquareCheck,
} from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types'

import { ICONS, WRAPERS } from 'utils/constants'

const FaPerson = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faPerson} role={ICONS.PERSON} />
        </div>
    )
}

FaPerson.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaCube = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faCube} role={ICONS.CUBE} />
        </div>
    )
}

FaCube.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaFileLines = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faFileLines} role={ICONS.FILE_LINES} />
        </div>
    )
}

FaFileLines.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaPlane = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faPlane} role={ICONS.PLANE} />
        </div>
    )
}

FaPlane.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaCar = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faCar} role={ICONS.CAR} />
        </div>
    )
}

FaCar.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaTruckField = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faTruckField} role={ICONS.KOMBI} />
        </div>
    )
}

FaTruckField.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaTruck = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faTruck} role={ICONS.FURGAO} />
        </div>
    )
}

FaTruck.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaVanShuttle = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faVanShuttle} role={ICONS.VAN} />
        </div>
    )
}

FaVanShuttle.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaBus = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faBus} role={ICONS.BUS} />
        </div>
    )
}

FaBus.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaBusSimple = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faBusSimple} role={ICONS.BUS_SIMPLE} />
        </div>
    )
}

FaBusSimple.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaCircleArrowLeft = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon
                icon={faCircleArrowLeft}
                role={ICONS.CIRCLE_ARROW_LEFT}
            />
        </div>
    )
}

FaCircleArrowLeft.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaCircleArrowRight = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon
                icon={faCircleArrowRight}
                role={ICONS.CIRCLE_ARROW_RIGHT}
            />
        </div>
    )
}

FaCircleArrowRight.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaCircleXmark = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faCircleXmark} role={ICONS.CIRCLE_X_MARK} />
        </div>
    )
}

FaCircleXmark.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaCirclePlus = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faCirclePlus} role={ICONS.CIRCLE_PLUS} />
        </div>
    )
}

FaCirclePlus.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const FaSquareCheck = (props) => {
    const style = { fontSize: `${props.size}`, color: `${props.color}` }
    return (
        <div style={style} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faSquareCheck} role={ICONS.SQUARE_CHECK} />
        </div>
    )
}

FaSquareCheck.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const Icons = {
    FaPerson,
    FaCube,
    FaFileLines,
    FaPlane,
    FaCar,
    FaTruckField,
    FaTruck,
    FaVanShuttle,
    FaBus,
    FaBusSimple,
    FaCircleArrowLeft,
    FaCircleArrowRight,
    FaCircleXmark,
    FaCirclePlus,
    FaSquareCheck,
}

export default Icons
