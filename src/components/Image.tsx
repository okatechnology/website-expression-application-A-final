import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import useGlobalState from '../GlobalState';

interface ImageProps {
  src: string;
}

const Image = ({ src }: ImageProps) => {
  const shownImg = useGlobalState().shownImg;
  const show = useMemo(() => src === shownImg, [shownImg]);
  return <Wrapper src={src} show={show} style={{ backgroundImage: `url('${src}')` }} />;
};

interface WrapperProps {
  src: string;
  show: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s;
`;

export default Image;
