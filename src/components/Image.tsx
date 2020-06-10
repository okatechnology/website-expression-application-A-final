import React, { useMemo } from 'react';
import styled from 'styled-components';
import useGlobalState from '../GlobalState';

interface ImageProps extends BGImageData {}

const CONTAIN_MARGIN = 40;

const Image = ({ src, size }: ImageProps) => {
  const shownImg = useGlobalState().shownImg;
  const show = useMemo(() => src === shownImg, [shownImg]);
  return <Wrapper size={size} show={show} style={{ backgroundImage: `url('${src}')` }} />;
};

interface WrapperProps extends Omit<ImageProps, 'src'> {
  show: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  height: ${({ size }) =>
    size === 'contain' ? `calc(100vh - ${(CONTAIN_MARGIN * 2) / 10}rem)` : '100vh'};
  background-size: ${({ size }) => size};
  background-position: center center;
  position: absolute;
  left: ${({ size }) => (size === 'contain' ? `${CONTAIN_MARGIN / 10}rem` : '0')};
  bottom: ${({ size }) => (size === 'contain' ? `${CONTAIN_MARGIN / 10}rem` : '0')};
  top: ${({ size }) => (size === 'contain' ? `${CONTAIN_MARGIN / 10}rem` : '0')};
  right: ${({ size }) => (size === 'contain' ? `${CONTAIN_MARGIN / 10}rem` : '0')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s;
  background-repeat: no-repeat;
`;

export default Image;
