import React from 'react';
import linkData from '../../../data/otherSubjectsLinkData';
import OtherSubjectsImage from './parts/OtherSubjectsImage';
import styled from 'styled-components';
import TextGroupWrapper from '../../TextGroupWrapper';
import dhuLogoImg from '../../../../images/dhu_logo_big.png';

const imageLinks = linkData.map((data) => (
  <OtherSubjectsImage
    image={data.image}
    href={data.href}
    place={data.place}
    textGroupImage={dhuLogoImg}
    key={data.place}
  />
));

const OtherSubjectsMain = () => {
  return (
    <TextGroupWrapper groupImage={dhuLogoImg}>
      <Wrapper>{imageLinks}</Wrapper>
    </TextGroupWrapper>
  );
};

const Wrapper = styled.ul`
  margin: 12.8rem 0 0;
  padding: 0;
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

export default OtherSubjectsMain;
