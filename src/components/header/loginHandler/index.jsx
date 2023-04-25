import photo_login_dummie from 'img/photo-login-dummie.png'
import './style.css'
import { BUTTONS } from 'utils/constants'
import AvatarLogin from './avatarLogin'
import ButtonLogin from './buttonLogin'

const LoginHandler = () => {
    const user = {
        full_name: 'Charles Arthur da Rocha Almeida',
        photo: { photo_login_dummie },
        email: 'aracha@unicamp.br',
    }

    const buttonType = BUTTONS.LOGOUT

    return (
        <div role="login-handler" className="nav-login">
            <AvatarLogin
                image={photo_login_dummie}
                full_name={user.full_name}
                email={user.email}
            />
            <ButtonLogin buttonType={buttonType} />
        </div>
    )
}

export default LoginHandler
