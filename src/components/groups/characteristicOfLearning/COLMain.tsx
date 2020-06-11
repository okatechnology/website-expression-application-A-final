import React from 'react';
import COLSectionDatas from '../../../data/COLSectionDatas';
import TextGroupWrapper from '../../TextGroupWrapper';
import COLSection from './parts/COLSection';
import styled from 'styled-components';
import BaseButton from '../../BaseButton';

const COLMain = () => {
  return (
    <Wrapper>
      {COLSectionDatas.map((data) => (
        <StyledTextGroupWrapper groupImage={data.image} key={data.headline}>
          <COLSection headline={data.headline} explanation={data.explanation} />
        </StyledTextGroupWrapper>
      ))}
      <BaseButton href="#" marginTop={32} text="Webデザイナーとは" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12.8rem;
`;

const StyledTextGroupWrapper = styled(TextGroupWrapper)`
  & + & {
    margin-top: 12.8rem;
  }
`;

export default COLMain;
