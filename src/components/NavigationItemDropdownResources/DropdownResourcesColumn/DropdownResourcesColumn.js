import NavigationDropdownResourcesColumn from '../NavigationDropdownResourcesColumn/NavigationDropdownResourcesColumn'
import New from '../../NavigationItemDropdown/DropdownSecondColumn/New/New'


const DropdownResourcesColumn = () => {
    return (

        <span className="dropdown">
            <NavigationDropdownResourcesColumn/>
            <NavigationDropdownResourcesColumn/>
            <NavigationDropdownResourcesColumn/><New/>
            <NavigationDropdownResourcesColumn/>
        </span>


    )
}

export default DropdownResourcesColumn
