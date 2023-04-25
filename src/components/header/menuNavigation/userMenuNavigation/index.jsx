import { Link } from 'react-router-dom'
import { LINKS } from 'utils/constants'
import './styles.css'

const UserMenuNavigation = () => {
    return (
        <>
            <div role="user-menu-navigation" className="nav-menu">
                <Link role="linkInicio" to={LINKS.USER.INICIO}>
                    Inicio
                </Link>
                <Link role="linkAgendar" to={LINKS.USER.AGENDAR}>
                    Agendar
                </Link>
                <Link role="linkLocalizar" to={LINKS.USER.LOCALIZAR}>
                    Localizar
                </Link>
                <Link role="linkAjuda" to={LINKS.USER.AJUDA}>
                    Ajuda
                </Link>
            </div>
        </>
    )
}

export default UserMenuNavigation
