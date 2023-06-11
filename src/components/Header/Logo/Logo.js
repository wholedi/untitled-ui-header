import logoImage from '../../../assets/logo.svg'
import './style.css'

const Logo = () => {
    return (
        <div className="header__logo">
            <img className="header__logo_img" src={logoImage} alt="logo" />
            <p className="header__logo_text">Untitled UI</p>
        </div>
    );
};

export default Logo;