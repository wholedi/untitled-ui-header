import NavigationItemDropdown from "../../NavigationItemDropdown/NavigationItemDropdown";

const NavigationItem = ({title, withDropdown}) => {
    return (
        <li className="menu__item">
            <a href="/">{title}</a>
            {!!withDropdown &&
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                         viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                    <NavigationItemDropdown />
                </>
            }
        </li>
    );
};

export default NavigationItem;