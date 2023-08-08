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
    
    
    
    

}
.ImgTopic{
    width:75px;
    height:75px;
    display:flex;
    justify-content:center;
    align-items:center;

}
.textDiv{
    display:flex;
    justify-content:center;
    align-items:center;
}
.mainImg{
    width:90%;
}

.footerImg{
    width:20%;
}
.react-player{
width:4px;
height:4rem;
  top: 1;
  left: 2;
}
`
