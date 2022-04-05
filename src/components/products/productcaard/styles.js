import styled from 'styled-components';



const ProductCardStyles  = styled.div`
    font-family:"Comic Sans MS", cursive, sans-serif;;
    margin:2rem
    display:grid;
    gap:1rem;
    justify-content:center;
`;
const Card = styled.div`
    margin:20px;
    box-shadow:5px 5px 5px 5px;
    border-radius:2rem;
    min-width:28rem;
    display:flex;
    img{
        width:10rem;
        height:11rem;
        margin-left:2rem;
    };
`

const CardDiv = styled.div`
    margin:1rem;
    h2{
        line-height:1.4rem;
        margin-bottom:0.5rem;
    };
    p{
        line-height:1.2rem;
    };
    h3{
        font-size:1.4rem;
        margin-top:0.6rem;
        
        &::before{
            content:"$";
        }
    };
`

export {ProductCardStyles, Card, CardDiv}