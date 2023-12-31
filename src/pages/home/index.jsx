
import { Wrapper } from '../components/Wrapper';
import Topic from '../components/topic/Topic';
import Footer from '../components/Footer/footer';
import VideoPlayer from '../components/VideoPlayer/player';
import {Button} from '../components/Button/Button';
import { Header, Main, Title ,TitleTwo,TitleTwoBack, TitleThree, TitleStrong,TopicHeader, BtnWrapper,BtnWrapper2,BtnWrapper3, ImgWrapper, AboutUs,CenteredButtonContainer } from '../../styles/styles';
import { Umbrella, FirstContainer, SecondContainer, AboutSection } from '../../styles/styles';
import { ButtonOne, ButtonTwo, ButtonTrhee } from '../components/Button/style';
//Import Images firmament-logo.svg
import firmamentLogo from "../../assets/firmament-logo.svg"
import educacao from '../../assets/educacao.png'
import UmbrellaSvg from '../../assets/Umbrella.svg'



export function Home() {
  return (
    <Wrapper>
      <Main>
        <Header>
          <img fill = '#652f87 'className ='firmamentImg'src={firmamentLogo} alt="" />
        </Header>
        <FirstContainer>
        <VideoPlayer></VideoPlayer>
          
          <BtnWrapper>
             <Umbrella>
                      <img className ='UmbrellaBG'src={UmbrellaSvg} alt="" />
              </Umbrella>
            <Title><TitleStrong>Educação Corporativa</TitleStrong></Title>
              <CenteredButtonContainer>
                <Button url="https://api.whatsapp.com/send?phone=++554898442525&text=Olá, gostaria de informações de como a educação corporativa poderá se aplicar na empresa que atuo!" Children = 'Quero Conhecer' component={ButtonTrhee} ></Button>
              </CenteredButtonContainer>
          </BtnWrapper>
        </FirstContainer>
        <SecondContainer>
          <AboutSection>
              <AboutUs>
                <TitleTwo>Investir na <TitleTwoBack>constante atualização</TitleTwoBack> é um comportamento certeiro das empresas que possuem em seu DNA a <TitleTwoBack>cultura inovadora.</TitleTwoBack></TitleTwo>   
                <BtnWrapper3>
                  <Button url="https://firmament.com.br/" Children = 'Conheça nossas soluções' component={ButtonTwo} ></Button>
                </BtnWrapper3>  
              </AboutUs>
              {/* <ImgWrapper>
              <img className ='mainImg' src={educacao} alt="" />
              </ImgWrapper> */}
            </AboutSection>
        </SecondContainer>
        
        <TopicHeader>
          <TitleThree>Conheça as nossas soluções em palestras, treinamentos e capacitações nas áreas de:</TitleThree>
        </TopicHeader>
        <Topic/>
        <BtnWrapper2>
          <Button url="https://firmament.com.br/contact" Children = 'Entrar em Contato' component={ButtonOne} ></Button>
        </BtnWrapper2>
        <div>
          <Footer/>
        </div>
        
      </Main>
    </Wrapper>
  );
}
