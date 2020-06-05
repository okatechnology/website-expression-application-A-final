import React, { FC } from 'react';
import styled from 'styled-components';
import { dhuColor } from '../data/value';
import Text from '../components/Text';
import Image from '../components/Image';

const Viewer: FC = ({ children }) => {
  return (
    <>
      <Wrapper>
        <ImgBox>
          <Image />
        </ImgBox>
        <CenterBorder />
        <TextBox>
          <Text children={children} />
        </TextBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ImgBox = styled.div`
  height: 100vh;
  width: 50%;
  position: fixed;
`;

const TextBox = styled.div`
  height: 100vh;
  width: 50%;
  margin-left: 50%;
`;

const CenterBorder = styled.span`
  width: 0.1rem;
  height: 100vh;
  display: block;
  position: fixed;
  right: 50%;
  top: 0;
  background-color: ${dhuColor};
`;

export default Viewer;
