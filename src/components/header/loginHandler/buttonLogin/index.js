import { BUTTONS } from 'utils/constants'
import './style.css'

const ButtonLogin = ({ buttonType, handleLogout, handleLogin }) => {
    switch (buttonType) {
        case BUTTONS.LOGIN:
            return (
                <button
                    className="nav-button nav-button-login"
                    role="login"
                    onClick={handleLogin}
                >
                    {BUTTONS.LOGIN}
                </button>
            )
        case BUTTONS.LOGOUT:
            return (
                <button
                    className="nav-button nav-button-logout"
                    role="logout"
                    onClick={handleLogout}
                >
                    {BUTTONS.LOGOUT}
                </button>
            )
    }
}

export default ButtonLogin
