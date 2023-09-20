import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
}

.firmamentImg{
    margin-left:0.3rem;
}
.Bar{
    width:30%;    
}
.ImgWrapper{
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: rgb(232, 182, 58, 0.9);
    border-radius: 50%;

    width:90px;
    height:90px;
    @media(max-width: 900px){
        width:70px;
        height:70px;
        margin-top:1rem;
      }

}
.ImgTopic{
    width:75px;
    height:75px;
    display:flex;
    justify-content:center;
    align-items:center;

    @media(max-width: 900px){
        width:55px;
        height:55px;
      }

}
.textDiv{
    display:flex;
    justify-content:center;
    align-items:center;
}
.mainImg{
    width:90%;
    @media(max-width: 900px){
        width:360px!important;
      }
}

.footerImg{
    width:20%;
    @media(max-width: 900px){
        width:40%;
    }
}
.UmbrellaBG{
  width:100%;
  height:100%;

}
.react-player{
    @media(max-width: 1440px){
    width:70vh!important;
      }
    @media(max-width: 1024px){
    width:40vh!important;
      }
    @media(max-width: 900px){
    width:50vh!important;
      }

}

`
