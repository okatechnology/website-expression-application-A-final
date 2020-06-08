import React from 'react';
import styled from 'styled-components';
import useGlobalState from '../GlobalState';
import gazo from '../../images/3dcg.jpg';

const ImageWrapper = () => {
  return <ShowImage />;
};

const ShowImage = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-image: url(${gazo});
`;

export default ImageWrapper;
