import React from 'react'

import { signOut } from 'firebase/auth'
import { auth } from '../../libs/firebase'

import { IoNotificationsSharp, IoMail, IoHome } from "react-icons/io5"
import {MdSportsHockey} from 'react-icons/md'
import{GoSignOut} from 'react-icons/go'
import { AppBarStyles, AppBarItem, AppBarItems } from './styles'
import { IconButton } from './../../ui/buttons'

function AppBar(props) {
    function onLogOutRequest(e){
        signOut(auth);
    }
    
    return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>Steve's Sticks <MdSportsHockey color="#19CBFF" size={35}></MdSportsHockey></AppBarItem>
                <AppBarItem></AppBarItem>
                <AppBarItem>
                    <IconButton><IoHome color=" #19CBFF" size="1.75rem"></IoHome></IconButton>
                    <IconButton><IoNotificationsSharp color=" #19CBFF" size="1.75rem" /></IconButton>
                    <IconButton><IoMail size="1.75rem" color=" #19CBFF"></IoMail></IconButton>
                    <IconButton onClick={onLogOutRequest}><GoSignOut color=" #19CBFF" size="1.75rem"></GoSignOut></IconButton>
                </AppBarItem>
            </AppBarItems>
        </AppBarStyles>
    )
}

export default AppBar 