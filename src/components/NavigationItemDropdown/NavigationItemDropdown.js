import DropdownFirstColumn from "./DropdownFirstColumn/DropdownFirstColumn";
import DropdownSecondColumn from "./DropdownSecondColumn/DropdownSecondColumn";
import DropdownOtherColumn from "./DropdownOtherColumn/DropdownOtherColumn";
import './style.css'

const NavigationItemDropdown = () => {
    return (
        <span className="menu-item_dropdown">
            <span className="menu-item_dropdown__container">
                <DropdownFirstColumn />
                <DropdownSecondColumn />
                <DropdownOtherColumn />
            </span>
            <span className="menu-item_dropdown-bg"></span>
        </span>
    );
};

export default NavigationItemDropdown;