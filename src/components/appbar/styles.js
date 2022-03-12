import styled from 'styled-components';

const AppBarStyles   = styled.nav`
    box-shadow:  0 0 2px 1px grey;
    padding: 0.5rem 1rem;
    background-color: #000000;    
`;

const AppBarItems = styled.ul`
    display:flex;
    justify-content: space-between;
    align-items:center;
`;

const AppBarItem = styled.li`
font-family: "Comic Sans MS", cursive, sans-serif;
font-size: 30px;
letter-spacing: -1.4px;
word-spacing: -5px;
color: #19CBFF;
font-weight: normal;
text-decoration: none;
font-style: italic;
font-variant: normal;
text-transform: capitalize;
`

export {AppBarStyles, AppBarItem, AppBarItems}