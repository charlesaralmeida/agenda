import logo_dga from 'img/LogotipoDGA.png'
import { openPage } from 'utils'
import { LINKS } from 'utils/constants'
import './style.css'

const LogoDGA = () => (
    <div className="nav-logo-container">
        <img
            className="btn"
            onClick={openPage(LINKS.DGA)}
            role="logo"
            src={logo_dga}
            alt="logo_dga"
        />
    </div>
)

export default LogoDGA
