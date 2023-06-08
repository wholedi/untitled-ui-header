import React from 'react'

const Test = () => {
    return (
        <MenuItemDropdown>

            <Dropdown>
                <DropdownTitle>
                    Title
                </DropdownTitle>
                <DropdownItem>
                    <DropdownItemImage/>
                    <DropdownItemTitle/>
                    <DropdownItemText/>
                </DropdownItem>

                <DropdownItem>
                    <DropdownItemImage/>
                    <DropdownItemTitle/>
                    <DropdownItemText/>
                </DropdownItem>

                <DropdownItem>
                    <DropdownItemImage/>
                    <DropdownItemTitle/>
                    <DropdownItemText/>
                </DropdownItem>

                <DropdownItem>
                    <DropdownItemImage/>
                    <DropdownItemTitle/>
                    <DropdownItemText/>
                </DropdownItem>
            </Dropdown>


            <Dropdown>
                <DropdownTitle>
                    Title
                </DropdownTitle>

                <DropdownItem>
                    <DropdownItemImage/>
                    <DropdownItemTitle/>
                    <DropdownItemText/>
                </DropdownItem>

                <DropdownItem>
                    <DropdownItemImage/>
                    <DropdownItemTitle/>
                    <DropdownItemText/>
                </DropdownItem>

                <DropdownItem>
                    <DropdownItemImage/>
                    <DropdownItemTitle/>
                    <DropdownItemText/>
                </DropdownItem>

                <DropdownItem>
                    <DropdownItemImage/>
                    <DropdownItemTitle/>
                    <DropdownItemText/>
                </DropdownItem>
            </Dropdown>


            <Dropdown className="other">
                <DropdownTitle>
                    Title
                </DropdownTitle>

                <DropdownOtherItem>
                    <DropdownOtherItemImage/>
                    <DropdownItemTitle/>
                    <DropdownItemText/>
                    <DropdownItemLink/>
                </DropdownOtherItem>

                <DropdownOtherItem>
                    <DropdownOtherItemImage/>
                    <DropdownItemTitle/>
                    <DropdownItemText/>
                    <DropdownItemLink/>
                </DropdownOtherItem>

                <DropdownOtherFooter>
                    Text and image
                </DropdownOtherFooter>
            </Dropdown>


        </MenuItemDropdown>
    )
}

export default Test
