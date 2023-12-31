import styled from "styled-components";

export const TopicHeader = styled.section`
    display:flex;
    justify-content:space-between;
    margin-left:10%;
    margin-right:10%;
    margin-top:10rem;
    
`
export const  Topics = styled.div`
    margin-left:8rem;
    display:flex;
    align-items:center;
    margin-top:1rem;
    @media(max-width: 1440px){
      margin-top:2rem;
        margin-left:2.5rem;
        }
    @media(max-width: 1024px){
        margin-left:1rem;
      }
      @media(max-width: 900px){
        margin-left:0rem;
        width:85%;
        height:230px;
        border-radius:20px;
        align-items:center;
        flex-direction:column;   
        box-shadow: rgba(255, 196, 0, 0.4) 0px 0px 0px 2px, rgba(255, 187, 0, 0.65) 0px 4px 6px -1px, rgba(255, 166, 0, 0.08) 0px 1px 0px inset; 
        margin-top:1.5rem;
      }

`
export const TopicTitle = styled.h2`
    display:flex;
    justify-content:center;
    color: ${({theme}) => theme.colors.primary};

    margin:1rem 0 1rem 1rem;
    font-size:2rem;
    font-weight:700;
    background-color: rgb(232, 182, 58, 0.4);
    width: fit-content;
    margin-top:2rem;

    @media(max-width: 1440px){
            font-size:1.8rem!important;
        }

    @media(max-width: 1024px){
        font-size:1.3rem!important;

      }
      @media(max-width: 900px){
        margin-top:1rem;
        font-size:18px!important;
        display:flex;
        align-items:center;
      }
           


`
export const TextTopic = styled.p`
    color: ${({theme}) => theme.colors.primary};
    text-align:center;
    margin-left:1rem;
    margin-top:1rem;
    font-size:2rem;
    font-weight:400;

    @media(max-width: 1440px){
        font-size:1.7rem!important;
    }
    @media(max-width: 1024px){
        font-size:1rem!important;
    }
    @media(max-width: 900px){
        font-size:12px!important;
    }


`