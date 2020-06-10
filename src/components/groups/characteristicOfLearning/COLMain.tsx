import React from 'react';
import COLSectionDatas from '../../../data/COLSectionDatas';
import TextGroupWrapper from '../../TextGroupWrapper';
import COLSection from './parts/COLSection';
import styled from 'styled-components';
import BaseButton from '../../BaseButton';

const mainTexts = COLSectionDatas.map((data) => (
  <TextGroupWrapper groupImage={data.image} key={data.headline}>
    <COLSection headline={data.headline} explanation={data.explanation} />
  </TextGroupWrapper>
));

const COLMain = () => {
  return (
    <Wrapper>
      {mainTexts}
      <BaseButton href="#" marginTop={32} text="Webデザイナーとは" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12.8rem;
  & > div + div {
    margin-top: 9.6rem;
  }
`;

export default COLMain;