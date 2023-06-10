import DropdownItem from "../DropdownItem/DropdownItem";

import image1 from '../../../assets/1.svg'
import image2 from '../../../assets/2.svg'
import image3 from '../../../assets/3.svg'
import image4 from '../../../assets/4.svg'

const DropdownFirstColumn = (props) => {
    return (
        <span className="dropdown">
            <span className="dropdown__title">{props.title}</span>
            <DropdownItem image={image1} />
            <DropdownItem image={image2} />
            <DropdownItem image={image3} />
            <DropdownItem image={image4} />
        </span>
    );
};

export default DropdownFirstColumn;