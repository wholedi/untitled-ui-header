import NavigationItem from "../NavigationItem/NavigationItem";
import NavigationItemButtons from "../NavigationItemButtons/NavigationItemButtons";
import './style.css'

const Navigation = () => {
    return (
        <nav className="header__menu">
            <ul className="header__menu_items">
                <NavigationItem title={'Home'} />
                <NavigationItem title={'Resources'} dropdownType={"resources"} />
                <NavigationItem title={'Products'} dropdownType={"products"} />
                <NavigationItem title={'Pricing'} />
                <NavigationItemButtons />
            </ul>
        </nav>
    );
};

export default Navigation;
