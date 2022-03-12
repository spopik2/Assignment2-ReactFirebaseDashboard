import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "libs/firebase";

import styledComponents from "styled-components";
import { SignoutButton } from "ui/buttons";
import{SidebarListItem} from './styles.js'
import {FaHockeyPuck} from 'react-icons/fa'
import {RiAddCircleFill, RiEdit2Fill} from 'react-icons/ri'
import {GiHockey} from 'react-icons/gi'
import {MdNotifications} from 'react-icons/md'
import {IoMail} from 'react-icons/io5'

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: '#19CBFF'
};

const ProductOptionsStyles = styledComponents.ul`
    height: auto;
    width: 100%;
    padding: 0;
    border: 1 solid white;
    text-decoration: none;
`

function ProductOptions (props){
    function onLogoutRequest(e){
        signOut(auth)
    }
    return(
        <ProductOptionsStyles>
            <SidebarListItem>
            <FaHockeyPuck color="#19CBFF" size={25}/><Link to="/dashboard" style={linkStyle}>Veiw all Products</Link>
            </SidebarListItem>
            <SidebarListItem>
            <RiAddCircleFill color="#19CBFF" size={25}/><Link to="/add" style={linkStyle}>Add a Stick</Link>
            </SidebarListItem>
            <SidebarListItem>
            <RiEdit2Fill color="#19CBFF" size={25}/><Link to="/edit" style={linkStyle}>Edit a Stick</Link>
            </SidebarListItem>
            <SidebarListItem>
            <GiHockey color="#19CBFF" size={25}/><Link to="/search" style={linkStyle}>Search a Stick</Link>
            </SidebarListItem>       
            <SidebarListItem>
            <MdNotifications color="#19CBFF" size={25}/><Link to="/notification" style={linkStyle}>Notifications</Link>
            </SidebarListItem>
            <SidebarListItem>
                <IoMail size={25} color=" #19CBFF"/><Link to="/mail" style={linkStyle}>E-Mails</Link>
            </SidebarListItem>
            <SidebarListItem>
                <SignoutButton onClick={onLogoutRequest}>Sign Out</SignoutButton>
            </SidebarListItem>
        </ProductOptionsStyles>
    )
}

export {ProductOptions}