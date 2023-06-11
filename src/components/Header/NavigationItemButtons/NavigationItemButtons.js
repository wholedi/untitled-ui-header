import './style.css'

const NavigationItemButtons = () => {
    return (
        <li className="menu__item button_group">
            <button type="button" className="header__button_one button button_border">Log in</button>
            <button type="button" className="header__button_two button">Sign Up</button>
        </li>
    );
};

export default NavigationItemButtons;