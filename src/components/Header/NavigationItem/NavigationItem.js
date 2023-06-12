import NavigationItemDropdown from "../../NavigationItemDropdown/NavigationItemDropdown";
import NavigationItemDropdownResources from '../../NavigationItemDropdownResources/NavigationItemDropdownResources'

const NavigationItem = ({title, dropdownType}) => {
    const getDropdown = (dropdownType) => {
        switch (dropdownType) {
            case "resources":
                return <NavigationItemDropdownResources/>
            case "products":
                return <NavigationItemDropdown/>
        }
    }

    return (
        <li className="menu__item">
            <a href="/">{title}</a>
            {!!dropdownType &&
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                         viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                    {getDropdown(dropdownType)}
                </>
            }
        </li>
    );
};

export default NavigationItem;
