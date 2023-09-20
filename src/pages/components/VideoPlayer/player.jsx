import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';
import ReactPlayer from 'react-player'
import EdCorporativa from '../../../assets/EdCorporativa.mp4'
const VideoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  margin-right:4rem;
  margin-left:8rem;
  margin-top:2rem;

  width:120vh;
  height:100%;
  @media(max-width: 1600px){
    margin-right:0rem;
    margin-top:1.2rem;
    width:120vh;


    }
      @media(max-width: 1024px){
    margin-top:1.8rem;
    width:100%;


      }
      @media(max-width: 768px){
        margin-top:1rem;
      }
      @media(max-width: 425px){
        margin-left:0rem;
       justify-content: center;


       
    }
      
`;

const VideoContainer = styled.div`
  width:100%;
  height:100%;

  
  
  display:flex;
  justify-content:center;
  align-items:center;
  @media(max-width: 16000px){
    width:100vh!important;
       
    }
  @media(max-width: 900px){
    width:41vh!important;
       
    }
    .react-player{
    @media(max-width: 1440px){
    width:100vh!important;
      }
    @media(max-width: 1024px){
    width:40vh!important;
      }
    @media(max-width: 900px){
    width:50vh!important;
      }

}
`;

const VideoPlayer = () => {
  return (
        <VideoWrapper>  
          <VideoContainer> 
            <ReactPlayer 
            className ='react-player' 
            url={EdCorporativa} 
            width= '100%'
            // playing
            height='100%'
            controls 
            ></ReactPlayer>
           </VideoContainer>
      </VideoWrapper>
  );
};

export default VideoPlayer;