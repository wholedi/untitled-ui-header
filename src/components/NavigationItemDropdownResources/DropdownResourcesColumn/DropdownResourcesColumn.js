import NavigationDropdownResourcesColumn from '../NavigationDropdownResourcesColumn/NavigationDropdownResourcesColumn'
import './style.css'


const DropdownResourcesColumn = () => {
    return (
        <span className="dropdown__second">
            <NavigationDropdownResourcesColumn/>
            <NavigationDropdownResourcesColumn/>
            <NavigationDropdownResourcesColumn/>
            <NavigationDropdownResourcesColumn/>
        </span>
    )
}

export default DropdownResourcesColumn
