import styled from "styled-components";

export const ButtonOne = styled.button` 
    width: 30%;
    padding: 30px;
    font-weight: 700;
    
    background-color: #652f87;
    color: #ffffff;

    border-radius: 5px;
    margin: 12px 0 0px;
    border: 3px solid "black";

    cursor: pointer;
    transition: filter 0.2s;
    outline:none;
    font-size: 28px;
    &:hover{
        filter: brightness(0.9);
    }


    @media(max-width: 1440px){
        font-size: 18px;
        padding: 20px;
        width: 30%;


    }
`

export const ButtonTwo = styled.button`
   width: 50%;
    padding: 30px;
    font-weight: 700;
    background-color: #E8B63A;

    color: #ffffff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: filter 0.2s;

    font-size: 28px;

    align-items:flex-end;
    display:flex;
    justify-content:center;

    outline: 0;
    
&:hover{
    filter: brightness(0.9);
}

@media(max-width: 1440px){
        font-size: 18px;
        padding: 20px;
        width: 50%;


    }
`

export const ButtonTrhee = styled.button`
    width: 80%;;
    padding: 30px;
    font-weight: 700;
    background-color: #652f87;
    
    color: #ffffff;
    border-radius: 8px;
    margin: 12px 0 0px;
    /* border: 3px solid "purple"; */

    cursor: pointer;
    transition: filter 0.2s;

    font-size: 28px;

    align-items:center;
    display:flex;
    justify-content:center;

    border:none;

&:hover{
    filter: brightness(0.9);
}

@media(max-width: 1440px){
        font-size: 18px;
        padding: 20px;
        width: 70%;


    }
`
