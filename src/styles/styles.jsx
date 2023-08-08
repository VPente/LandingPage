import styled from "styled-components";
export const Header = styled.header`
    padding:1rem;

    align-items: start;
    display: flex;
    box-shadow:1px;
    border-bottom: 1px solid #652F87;
`

export const Main = styled.section`
    display: block;
    flex-direction: column;
    /* background: linear-gradient(0.50turn, #2a63ff 40%, #2196F3 , #9C27B0 ); */
    background-color: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-position-x:95%;
    background-position-y:50%;
    background-size: 500px 400px;
    background-image:url("../../../../public/images/Umbrella.svg");

    
` 


export const Title = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    //margin:5rem 30rem 5rem 35rem;
    width:46%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    justify-content:center;

    
    `
export const TitleTwo = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    font-size: 45px;
    font-style: normal;
    line-height: normal;
    margin-top:2rem;
    width:90%;
    
    @media(max-width: 1440px){
        font-size: 35px!important;
    }

`

export const TitleTwoBack = styled.span`
    color: ${({theme}) => theme.colors.primary};
    font-size: 45px;
    font-style: normal;
    /* font-weight: 600; */
    line-height: normal;
    margin-top:2rem;
    background-color: rgb(232, 182, 58, 0.4);

    @media(max-width: 1440px){
        font-size: 35px!important;
    }

    `

export const TitleThree = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    font-size: 54px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top:2rem;
    
    @media(max-width: 1440px){
        font-size: 35px!important;
    }
    
`
export const TitleStrong = styled.strong`
    font-size: 85px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    color: #652f87;
   
    @media(max-width: 1440px){
        font-size: 60px!important;
    }


    `
export const SubTitle = styled.h2`
    color: ${({theme}) => theme.colors.third};

    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.60;
    margin-bottom:2.5rem;
`
export const FirstContainer = styled.section`
    margin: 20px 0 25px 3rem;
    align-items: center;
    display:flex;


`
export const SecondContainer = styled.section`
    /* border: 1px solid #FFF; */
    padding:0 10rem 10rem 10rem;

    
`
export const ThirdContainer = styled.section`
    /* display: grid;
    grid-template-columns: repeat(1, 25rem);
    /* grid-template-rows: repeat(2, 15rem); */
    /* gap: 2rem; */ 
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    margin-top:2rem;
    margin-left:6rem;

   

    

    
`

export const FourthContainer = styled.section`
    display:flex;
    width:100%;
    padding:0 10rem 10rem 10rem;

    border: 1px solid #FFF;


`

export const TopicHeader = styled.section`
    display:flex;
    justify-content:center;
    margin-left:10%;
    margin-right:10%;
    margin-top:2rem;
    align-items:center;

    
    
`
export const BtnWrapper = styled.section`
display:flex;
justify-content: flex-start;
flex-direction: column;
margin-right:10rem;

@media(max-width: 1440px){
margin-right:1rem;
margin-left:2rem;
        
    }



`
export const BtnWrapper2 = styled.section`
display:flex;
justify-content:flex-end;
margin-right:20%;
margin-top:2rem;
margin-bottom:20rem;

`
export const BtnWrapper3 = styled.div`
display:flex;
justify-content:flex-start;
margin-top:3.7rem;

`
export const ImgWrapper = styled.div`
display:flex;
justify-content:center;
width:70%;
`
export const AboutSection = styled.div`
    display:flex;
    justify-content:space-between;
    
    /* border: 1px solid #FFF; */
    
    margin-top:7rem;
`
export const AboutUs = styled.div`
align-items:start;



`
export const Text = styled.p`
width:70%;
margin-top:1rem;
color: ${({theme}) => theme.colors.secondary};


margin-left:5rem;
`