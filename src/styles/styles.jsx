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
    
    
    
    
    
` 
export const Umbrella = styled.span`
    width:300px;
    height:300px;
    right:-120px;
    top:90px;
    position:absolute;
    z-index:-1;
    @media(max-width: 1600px){
        width:250px;
        height:250px;
        right:-20px;
    }
    @media(max-width: 900px){
        width:50px;
        height:50px;
        right:-40px;
        top:5px;
    
    }
    

`

export const Title = styled.div`
    color: ${({theme}) => theme.colors.primary};
    //margin:5rem 30rem 5rem 35rem;
    width:100%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-items:center;
    
@media (min-width:1024px) {
    margin-inline-start:5rem;

    
}
    @media(max-width: 900px){
        font-size:1.5rem!important;
        text-wrap: nowrap;
        margin-top: 1rem;
        margin-bottom: 2rem; 
        
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
@media(max-width: 900px){
    font-size:1.7rem!important;
    text-wrap: nowrap;
    margin-top: 1rem;
    margin-bottom: 2rem; 
    margin:0 auto;

    
}
`   
export const TitleTwo = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    
    margin-top:2rem;
    width:90%;
    text-align:justify;
    @media(max-width: 1440px){
        font-size: 35px!important;
    }
    @media(max-width: 1024px){
        font-size: 25px!important;
    }

    @media(max-width: 900px){
        font-size: 16px!important;
        text-align: justify;
        margin:0 auto;

      }


`

export const TitleTwoBack = styled.span`
    color: ${({theme}) => theme.colors.primary};
    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top:2rem;
    background-color: rgb(232, 182, 58, 0.4);

    @media(max-width: 1440px){
        font-size: 35px!important;
    }
    @media(max-width: 1024px){
        font-size: 25px!important;
    }

    @media(max-width: 900px){
        font-size: 16px!important;
        text-align: justify;
        

        }
    `

export const TitleThree = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top:2rem;
    width:100%;
    @media(max-width: 1440px){
        font-size: 35px!important;
    }

    @media(max-width: 1024px){
        font-size: 25px!important;
    }
    @media(max-width: 900px){
        font-size: 18px!important;
        margin:0 auto;
        margin-left:0.6rem;
        

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
    margin: 20px 0 25px;
    align-items: center;
    display:flex;
    @media(max-width: 900px){
         margin: 20px 0px 0px;
         display:flex;
         flex-direction:column;
         margin-left:0px;
         align-items:center;
      }
`
export const SecondContainer = styled.section`
    padding:0 5rem 10rem 10rem;

    @media(max-width: 900px){
        padding:0 0.5rem 1rem 0.5rem;
        display:flex;
        flex-direction:column;
}

    
`
export const ThirdContainer = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    margin-top:2rem;
    margin-left:6rem;
@media(max-width: 900px){
        margin-left:2rem;
}   
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
    margin-left:6%;
    margin-right:10%;
    margin-top:2rem;
    align-items:center;

    @media(max-width: 900px){
        
        margin-left:1rem;
    

}
     
`
export const CenteredButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; 
`;
export const BtnWrapper = styled.div`
display:flex;
justify-content: flex-start;
flex-direction: column;
margin-right:10rem;
position: relative;

@media(max-width: 1440px){
margin-right:1rem;
margin-left:2rem;
        
    }
@media(max-width: 900px){
    justify-content:center;
    margin-right:0px;
margin-left:-2.5rem;
text-align: center;


}



`
export const BtnWrapper2 = styled.section`
display:flex;
justify-content:flex-end;
margin-right:20%;
margin-top:2rem;
margin-bottom:20rem;

@media(max-width: 1440px){
        margin-bottom:15rem;
margin-right:15%;

        }


@media(max-width: 900px){
    justify-content:center;
    margin-right:0;
    margin-bottom:3rem;

        
    }

`
export const BtnWrapper3 = styled.div`
display:flex;
justify-content:center;
margin-top:8rem;

@media(max-width: 900px){
    justify-content:center;
    margin-top:3rem;
    
      }


      
`
export const ImgWrapper = styled.div`
display:flex;
justify-content:center;
width:70%;
@media(max-width: 900px){
        display:flex;
        margin: 20px 0 10px 0rem;
     }
      
`
export const AboutSection = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:7rem;
    
    @media(max-width: 900px){
    display:flex;
    flex-direction:column;
    margin-top:4rem;

      }
     
    
`
export const AboutUs = styled.div`
align-items:start;
@media(max-width: 900px){
    margin-left:0;
      }



`
export const Text = styled.p`
width:70%;
margin-top:1rem;
color: ${({theme}) => theme.colors.secondary};
margin-left:5rem;
`