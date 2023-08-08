import styled from "styled-components";

export const TopicHeader = styled.section`
    display:flex;
    justify-content:space-between;
    margin-left:10%;
    margin-right:10%;
    margin-top:10rem;
    
`
export const  Topics = styled.div`
/* border: solid 1px white; */
margin-left:8rem;
display:flex;
align-items:center;
margin-top:1rem;
@media(max-width: 1440px){
    margin-left:5rem;
;
    }


`
export const TopicTitle = styled.h2`
display:flex;
justify-content:center;
color: #652f87;
margin:1rem 0 1rem 1rem;
font-size:2rem;
font-weight:700;
background-color: rgb(232, 182, 58, 0.4);
width: fit-content;
margin-top:2rem;

/* @media(max-width: 1440px){
        font-size:1.8rem!important;
    } */
`
export const TextTopic = styled.p`
color:#652f87;
text-align:center;
margin-left:1rem;
margin-top:1rem;
font-size:2rem;

@media(max-width: 1440px){
        font-size:1.7rem!important;
    }





`