import styled from 'styled-components';

const Label = styled.label`
    width: ${props => props.width || "100%"};
    font-size: 12px;
    color: rgb(71 85 105);
`;
const Input = styled.input`
    width: ${props => props.width || "100%"};
    border:none;
    border-radius: 2px;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.19);
    font-size:1.125rem;
    padding: 0.35rem 0.5rem;
    ::placeholder{
        font-size: 14px;
        color: rgb(71 85 105);
    }
    :focus{
        background-color:  rgb(241 245 249);
    }
`;

const TextArea = styled.textarea`
    width: ${props => props.width || "100%"};
    border:${props => props.border || "none"};;
    border-radius: ${props => props.radius || "3px"};;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.19);
    font-size: ${props => props.fs || "1.125rem"};;
    padding: ${props => props.padding || "0.35rem 0.5rem"};;;
    ::placeholder{
        font-size: 14px;
        color: #94a3b8;
    }
    :focus{
        background-color: #f8fafc;
    }
`;

export{Input, Label, TextArea} ;