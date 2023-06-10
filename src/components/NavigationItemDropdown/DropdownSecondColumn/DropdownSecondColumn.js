import DropdownItem from "../DropdownItem/DropdownItem";

import image5 from '../../../assets/5.svg'
import image6 from '../../../assets/6.svg'
import image7 from '../../../assets/7.svg'
import image8 from '../../../assets/8.svg'

const DropdownSecondColumn = (props) => {
    return (
        <span className="dropdown">
            <span className="dropdown__title">{props.title}</span>
            <DropdownItem image={image5} />
            <DropdownItem image={image6} />
            <DropdownItem image={image7} isNew />
            <DropdownItem image={image8} />
        </span>
    );
};

export default DropdownSecondColumn;