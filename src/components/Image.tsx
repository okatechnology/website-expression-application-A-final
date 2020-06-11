import React, { useMemo } from 'react';
import styled from 'styled-components';
import useGlobalState from '../GlobalState';
import { mediaQuery } from '../data/values';
import useWidthProvider from '../WidthProvider';

interface ImageProps extends BGImageData {}

const CONTAIN_MARGIN = 40;

const Image = ({ src, size }: ImageProps) => {
  const shownImg = useGlobalState().shownImg;
  const show = useMemo(() => src === shownImg, [shownImg]);
  const twoColumn = useWidthProvider().twoColumn;
  return (
    <Wrapper
      size={size}
      show={show}
      twoColumn={twoColumn}
      style={{ backgroundImage: `url('${src}')` }}
    >
      <BGForSP />
    </Wrapper>
  );
};

interface WrapperProps extends Omit<ImageProps, 'src'> {
  twoColumn: boolean;
  show: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  height: ${({ size }) =>
    size === 'contain' ? `calc(100vh - ${(CONTAIN_MARGIN * 2) / 10}rem)` : '100vh'};
  background-size: ${({ size }) => size};
  background-position: center center;
  position: absolute;
  left: ${({ size, twoColumn }) =>
    size === 'contain' && twoColumn ? `${CONTAIN_MARGIN / 10}rem` : '0'};
  bottom: ${({ size, twoColumn }) =>
    size === 'contain' && twoColumn ? `${CONTAIN_MARGIN / 10}rem` : '0'};
  top: ${({ size, twoColumn }) =>
    size === 'contain' && twoColumn ? `${CONTAIN_MARGIN / 10}rem` : '0'};
  right: ${({ size, twoColumn }) =>
    size === 'contain' && twoColumn ? `${CONTAIN_MARGIN / 10}rem` : '0'};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s;
  background-repeat: no-repeat;
`;

const BGForSP = styled.div`
  height: 100vh;
  ${mediaQuery.forTb} {
    background: linear-gradient(
      to bottom,
      #fff0,
      #fffa 10%,
      #fffd 20%,
      #fffe 30%,
      #fffe 70%,
      #fffd 80%,
      #fffa 90%,
      #fff0
    );
  }
  ${mediaQuery.forSp} {
    background: linear-gradient(
      to bottom,
      #fff0,
      #fffa 5%,
      #fffd 10%,
      #fffe 20%,
      #fffe 80%,
      #fffd 90%,
      #fffa 95%,
      #fff0
    );
  }
`;

export default Image;
