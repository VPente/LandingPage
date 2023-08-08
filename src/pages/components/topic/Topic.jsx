import React from 'react';
import {Topics, TextTopic, TopicTitle} from './style.jsx';
import {ThirdContainer} from "../../../styles/styles.jsx"

function Topic (){
    return(
      <ThirdContainer>
        <Topics>
            <span className='ImgWrapper'>
              <img className='ImgTopic' src="'../../../../public/icons/iconLamp.svg" alt="" />
            </span>
            <div>
              <TopicTitle>Intraempreendedorismo:</TopicTitle>
            </div>
            <div className='textDiv'>
              <TextTopic> A mentalidade Inovadora para Resultados.</TextTopic>
            </div>
          </Topics>
          <Topics>
            <span className='ImgWrapper'>
              <img className='ImgTopic' src="'../../../../public/icons/iconArrow.svg" alt="" />
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
              <img  className='ImgTopic' src="'../../../../public/icons/iconPuzzle.svg" alt="" />
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
              <img className='ImgTopic' src="'../../../../public/icons/iconMap.svg" alt="" />
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








