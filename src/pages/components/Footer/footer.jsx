import React from 'react';
import {FooterAll,FooterWrapper, ColumnOne, ColumnTwo, ColumnThree,TextFooter,TittleFooter,ContactTopic,IconBox, SubFooter,Cnpj,MediaSection,MediaIcons} from './style'
import firmament from '../../../assets/firmament.svg'
import socialInstagram from '../../../assets/socialInstagra.svg'
import socialLinkedin from '../../../assets/socialLinkedin.svg'
import socialWhats from '../../../assets/socialWhats.svg'
import socialYoutube from '../../../assets/socialYoutube.svg'
import iconPhone from '../../../assets/iconPhone.svg'
import iconEmail from '../../../assets/iconEmail.svg'
import iconInstagram from '../../../assets/iconInstagram.svg'
import iconLinkedin from '../../../assets/iconLinkedin.svg'

const Footer = () => {
  return (
    <FooterAll>
      <FooterWrapper>
        <ColumnOne>
          <span><img className='footerImg' src={firmament} alt="" /></span>
          <TextFooter>Da ciência para a empresa. Da empresa para a ciência! </TextFooter>
          <MediaSection>
            <MediaIcons href='https://www.instagram.com/firmament.group/?__coig_restricted=1'target="_blank"><img src={socialInstagram}alt="" /></MediaIcons>
        
            <MediaIcons href='https://www.linkedin.com/company/jaque-bitencourt-educa%C3%A7%C3%A3o-corporativa/'target="_blank"><img src={socialLinkedin}alt="" /></MediaIcons>
          
            <MediaIcons href='https://api.whatsapp.com/send?phone=++554898442525&text=Olá, gostaria de informações de como a educação corporativa poderá se aplicar na empresa que atuo!'target="_blank"><img src={socialWhats}alt="" /></MediaIcons>
      
            <MediaIcons href='https://www.youtube.com/@FirmamentInovacaoCorporativa'target="_blank"><img src={socialYoutube}alt="" /></MediaIcons>
          </MediaSection>
        </ColumnOne>
        <ColumnTwo>
          <TittleFooter>Contatos</TittleFooter>
          <ContactTopic>
            <IconBox><img src={iconPhone} alt="" /></IconBox>
            (48) 9 9844-2525
          </ContactTopic>
          <ContactTopic>
            <IconBox><img src={iconEmail} alt="" /></IconBox>
            jaqueline@firmament.com.br
          </ContactTopic>
          <ContactTopic>
            <IconBox><img src={iconInstagram} alt="" /></IconBox>
            @firmament.group
          </ContactTopic>
          <ContactTopic>
            <IconBox><img src={iconLinkedin} alt="" /></IconBox>
             Firmament Inovação Corporativa
          </ContactTopic>
        </ColumnTwo>
      </FooterWrapper>
      <SubFooter>
        <TextFooter>Firmament Inovação Corporativa © 2023 </TextFooter>
        <Cnpj>
          <TextFooter>
            CNPJ: 42.268.153/0001-64
          </TextFooter>
        </Cnpj>
      </SubFooter>
    </FooterAll>
  );
};

export default Footer;