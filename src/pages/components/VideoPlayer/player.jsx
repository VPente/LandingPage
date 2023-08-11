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

  width:100%;
  height:100%;
  @media(max-width: 1440px){
    margin-right:0rem;
    margin-top:1.2rem;

    }
      @media(max-width: 1024px){
    margin-top:1.8rem;

      }
      @media(max-width: 768px){
        margin-top:5rem;
      }
      @media(max-width: 425px){
        margin-left:0rem;
       justify-content: center;
       
    }
      
`;

const VideoContainer = styled.div`
  width:100%;
  height:100%;

  box-shadow: #ffffff 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px,  rgba(111, 192, 220, 1) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px,rgba(232, 182, 58, 1) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px,  rgba(101, 47, 135, 1) 30px -30px;
  
  
  display:flex;
  justify-content:center;
  align-items:center;
  
  @media(max-width: 430px){
    width:40vh!important;
       
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