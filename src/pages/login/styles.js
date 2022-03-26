import styled from "styled-components";

const BoxContainter = styled.div`
    margin: 100px auto;
    width: 2000px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    border-radius: 10px;
    height: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const FormContainer = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FormContainerLeft = styled.div`
background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
);
border-radius: 10px 0 0 10px;
position: relative;
`

const FormContainerRight = styled.div`
    border-radius: 0 10px 10px 0;
    position: relative;
    background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`

const FormInputs = styled.div`
    margin-bottom: 0.5rem;
    width: 80%;
`

const SubmitButton = styled.button`
    width: 25%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    background: rgb(102, 255, 255);
`

export{BoxContainter,FormContainer,SubmitButton, FormContainerLeft, FormContainerRight, FormInputs};