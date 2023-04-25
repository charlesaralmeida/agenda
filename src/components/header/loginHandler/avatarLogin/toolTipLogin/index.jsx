import './style.css'

const TooltipLogin = ({ full_name, email }) => {
    return (
        <div className="nav-photo-login-tooltiptext">
            <span>{full_name}</span>
            <br />
            <span>{email}</span>
        </div>
    )
}

export default TooltipLogin
