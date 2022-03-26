import styled from 'styled-components';

const PageNotFoundStlyes = styled.aside`
    margin:60px 0 0 0;
    width:80%;
    height:100%;
    margin: 4rem auto 0;
    text-align:center;
    background-color:#d3d3d3;
    border-radius: 20px 20px 20px 20px;
`

const PageNotFoundh1 = styled.h1`
    padding:15px 0 0 0;
    color:#2a2a2a;
    font-size:4rem;
    font-weight:500;
    font-family: "Comic Sans MS", cursive, sans-serif;
`

const PageNotFoundFooter = styled.footer`
    margin:700px 0 0 0;
    font-size:1.75rem;
    font-weight:400;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-color="#19CBFF";
    button{
        margin:2rem;
        width:10%;
    }
`
const PageNotFoundMessage = styled.figcaption`
    color:#2a2a2a;
    font-size:2.5rem;
    font-weight:400;
    font-family: "Comic Sans MS", cursive, sans-serif;
`
export { PageNotFoundStlyes, PageNotFoundFooter, PageNotFoundMessage, PageNotFoundh1}