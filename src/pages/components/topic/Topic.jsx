import React from 'react';
import {Topics, TextTopic, TopicTitle} from './style.jsx';
import {ThirdContainer} from "../../../styles/styles.jsx"
import iconLamp from '../../../assets/iconLamp.svg'
import iconArrow from '../../../assets/iconArrow.svg'
import iconPuzzle from '../../../assets/iconPuzzle.svg'
import iconMap from '../../../assets/iconMap.svg'



function Topic (){
    return(
      <ThirdContainer>
        <Topics>
            <span className='ImgWrapper'>
              <img className='ImgTopic' src={iconLamp} alt="" />
            </span>
            <div>
              <TopicTitle>Intraempreendedorismo:</TopicTitle>
            </div>
            <div className='textDiv'>
              <TextTopic> A Mentalidade Inovadora para Resultados.</TextTopic>
            </div>
          </Topics>
          <Topics>
            <span className='ImgWrapper'>
              <img className='ImgTopic' src={iconArrow} alt="" />
            </span>
            <div>
              <TopicTitle>Aprendizado:</TopicTitle>
            </div>
            <div className='textDiv'>
              <TextTopic>Cultura Organizacional e a Liderança Inovadora.</TextTopic>
            </div>
          </Topics>
          <Topics>
            <span className='ImgWrapper'>
              <img  className='ImgTopic' src={iconPuzzle} alt="" />
            </span>
            <div>
              <TopicTitle>Comunicação:</TopicTitle>
            </div>
            <div className='textDiv'>
              <TextTopic>Gestão do Conhecimento e da Comunicação Organizacional.</TextTopic>
            </div>
          </Topics>
          <Topics>
            <span className='ImgWrapper'>
              <img className='ImgTopic' src={iconMap} alt="" />
            </span>
            <div>
              <TopicTitle>Estratatégia:</TopicTitle>
            </div>
            <div className='textDiv'>
              <TextTopic>Planejamento Estratégico.</TextTopic>
            </div>
          </Topics>
        </ThirdContainer>
    )
}
export default Topic








