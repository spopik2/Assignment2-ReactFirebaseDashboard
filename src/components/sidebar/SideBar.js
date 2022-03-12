import React from "react";
import{SidebarStyles, SidebarList} from './styles.js'
import {ProductOptions} from './ProductOptions'

function SideBar(props) {
    return(
        <>
            <SidebarStyles>
                <SidebarList>
                    <ProductOptions/>
                </SidebarList>
            </SidebarStyles>
        </>
    )
}

export default SideBar;