import TooltipLogin from './toolTipLogin'
import './style.css'

const AvatarLogin = ({ image, full_name, email }) => (
    <div className="nav-avatar">
        <img src={image} className="nav-photo-login" alt="user_picture" />
        <TooltipLogin full_name={full_name} email={email} />
    </div>
)

export default AvatarLogin
