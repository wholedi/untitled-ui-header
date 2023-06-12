import DropdownOtherItem from "./DropdownOtherItem/DropdownOtherItem";
import DropdownOtherColumnFooter from "./DropdownOtherColumnFooter/DropdownOtherColumnFooter";
import './style.css'

const DropdownOtherColumn = () => {
    return (
        <span className="dropdown dropdown--other">
           <span className="dropdown__title title__other">Resources</span>
            <DropdownOtherItem />
            <DropdownOtherItem />
            <DropdownOtherColumnFooter />
        </span>
    );
};

export default DropdownOtherColumn;
