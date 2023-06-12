import DropdownResourcesColumn from './DropdownResourcesColumn/DropdownResourcesColumn'
import './style.css'

const NavigationItemDropdownResources = () => {
    return (
        <span className="menu-item_dropdown">
            <span className="menu-item_dropdown__container">
                <DropdownResourcesColumn/>
                {/*<DropdownResourcesFooter/>*/}
            </span>
        </span>
    )
}

export default NavigationItemDropdownResources
