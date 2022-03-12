import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "libs/firebase";

import{SidebarStyles, SidebarList, SidebarListItem} from './styles.js'
import {Button} from 'ui/buttons'
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