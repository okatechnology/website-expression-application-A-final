import React from 'react';
import styled from 'styled-components';
import imageData from '../data/images';
import Image from './Image';

const imageComponents = imageData.map((data) => (
  <Image src={data.src} size={data.size} key={data.src} />
));

const ImageWrapper = () => {
  return <ShowImage>{imageComponents}</ShowImage>;
};

const ShowImage = styled.div`
  position: relative;
`;

export default ImageWrapper;
