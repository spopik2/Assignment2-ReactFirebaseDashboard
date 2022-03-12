import styled from "styled-components";

const SidebarStyles = styled.div`
    height: 100%;
    width: 298px;
    background-color: #000000;
`
const SidebarList = styled.ul`
    height: auto;
    width: 100%;
    padding: 0;
    border: 1 solid white;
`

const SidebarListItem = styled.li`
    width: 100%;
    height: 50px;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: white;
    justify-content: center;
    align-items: center;
    text-align:center;
    font-family: "Comic Sans MS", cursive, sans-serif;
`

export  {SidebarStyles, SidebarList, SidebarListItem};