import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { dhuColor, mediaQuery } from '../data/values';
import TextWrapper from './TextWrapper';
import ImageWrapper from './ImageWrapper';

const Viewer: FC = ({ children }) => {
  return (
    <>
      <Wrapper>
        <ImgBox>
          <ImageWrapper />
        </ImgBox>
        <CenterBorder />
        <TextBox>
          <TextWrapper children={children} />
        </TextBox>
      </Wrapper>
    </>
  );
};

const fadein = keyframes`
  0%{
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  ${mediaQuery.forTb} {
    display: block;
    position: relative;
  }
`;

const ImgBox = styled.div`
  height: 100vh;
  width: 50%;
  position: fixed;
  animation: ${fadein} 1.5s;
  background-color: #000;

  ${mediaQuery.forTb} {
    width: 100%;
    z-index: -9999;
    background-color: #fff;
  }
`;

const TextBox = styled.div`
  height: 100vh;
  width: 50%;
  margin-left: 50%;
  animation: ${fadein} 1.5s;

  ${mediaQuery.forTb} {
    margin-left: 0;
    width: 100%;
  }
`;

const extend = keyframes`
  0%{
    transform: translateY(-100vh);
  }
`;

const CenterBorder = styled.span`
  width: 0.1rem;
  height: 100vh;
  display: block;
  position: fixed;
  right: 50%;
  top: 0;
  background-color: ${dhuColor};
  animation: ${extend} 1s;

  ${mediaQuery.forTb} {
    display: none;
  }
`;

export default Viewer;
