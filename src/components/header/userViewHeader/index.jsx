import LogoDGA from '../logoDGA'
import UserMenuNavigation from '../menuNavigation/userMenuNavigation'
import LoginHandler from '../loginHandler'
import './style.css'
import Divider from '../divider'

const UserViewHeader = () => {
    return (
        <>
            <div role="user-view-header" className="user-view-header">
                <LogoDGA />
                <UserMenuNavigation />
                <LoginHandler />
            </div>
            <Divider />
        </>
    )
}

export default UserViewHeader
