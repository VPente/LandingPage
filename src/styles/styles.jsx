import styled from "styled-components";
import Umbrella from '../assets/Umbrella.svg'

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
    background-image:url(${Umbrella});
    
    @media(max-width: 1440px){
    margin-right:0rem;
    background-position-x:99%;
    background-position-y:44%;
    background-size: 400px 300px;

      }

    @media(max-width: 1024px){
    margin-right:0rem;
    background-position-x:95%;
    background-position-y:49%;
    background-size: 300px 200px;

      }

      @media(max-width: 768px){
        margin-right:0rem;
    background-position-x:99%;
    background-position-y:57%;
    background-size: 300px 200px;
      }
      @media(max-width: 430px){
        width:100%; 
        margin-right:0rem;
    background-position-x:99%;
    background-position-y:40%;
    background-size: 100px 200px;
}

@media(max-width: 360px){
    
        margin-right:0rem;
    background-position-x:99%;
    background-position-y:39%;
    background-size: 100px 200px;

    }

@media(max-width: 320px){
    width:100%; 
        margin-right:0rem;
    background-position-x:99%;
    background-position-y:38.5%;
    background-size: 100px 200px;

    }

    
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

    @media(max-width: 900px){
        font-size: 16px!important;
        width:46%;
        margin-top: 1rem;
        margin-bottom: 2rem;
    
      }
      
    
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
    @media(max-width: 1024px){
        font-size: 25px!important;
    }

    @media(max-width: 900px){
        font-size: 16px!important;
        text-align: justify;
        margin-left:1rem;

      }

    /* @media(max-width: 768px){
        font-size: 25px!important;
         width:100%;

      }
    
      @media(max-width: 430px){
        font-size: 24px!important;
        margin:0;
}
@media(max-width: 375px){
    font-size: 22px!important;
    }
    @media(max-width: 320px){
        font-size: 18px!important;

    } */

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
    @media(max-width: 1024px){
        font-size: 25px!important;
    }

    @media(max-width: 900px){
        font-size: 16px!important;
        text-align: justify;

        }
    /* @media(max-width: 430px){
        font-size: 21px!important;
}
    @media(max-width: 375px){
    font-size: 20px!important;
    }
    

    @media(max-width: 360px){
        font-size: 19px!important;

    } */

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

    @media(max-width: 1024px){
        font-size: 25px!important;
    }
    @media(max-width: 900px){
        font-size: 18px!important;
        

    }
    /* @media(max-width: 430px){
        font-size: 21px!important;
        
}
@media(max-width: 375px){
    font-size: 20px!important;
    }
    @media(max-width: 360px){
        font-size: 19px!important;

    } */

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
        font-size:1.5rem!important;
        text-wrap: nowrap;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    /* @media(max-width: 430px){
        font-size: 30px!important;
        text-wrap: nowrap;
        margin-top: 1rem;
        margin-bottom: 2rem;
    
      }
    @media(max-width: 375px){
        font-size: 28px!important;
    }
    @media(max-width: 320px){
        font-size: 24px!important;
    } */
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
        align-items:flex-start;
         display:flex;
         flex-direction:column;
         margin: 20px 0 25px;
      }


`
export const SecondContainer = styled.section`
    /* border: 1px solid #FFF; */
    padding:0 10rem 10rem 10rem;
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
    margin-left:10%;
    margin-right:10%;
    margin-top:2rem;
    align-items:center;

    @media(max-width: 900px){
        
        margin-left:1rem;
    

}
    
   
    
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
@media(max-width: 900px){
        display:flex;  
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
justify-content:flex-start;
margin-top:3.7rem;

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
        margin: 20px 0 25px 4rem;
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