import React from 'react';
import COLSectionDatas from '../../../data/COLSectionDatas';
import TextGroupWrapper from '../../TextGroupWrapper';
import COLSection from './parts/COLSection';
import styled from 'styled-components';
import BaseButton from '../../BaseButton';
import { mediaQuery } from '../../../data/values';

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
  ${mediaQuery.forSp} {
    margin-top: 9.6rem;
  }
`;

const StyledTextGroupWrapper = styled(TextGroupWrapper)`
  & + & {
    margin-top: 12.8rem;
  }
  ${mediaQuery.forSp} {
    & + & {
      margin-top: 6.4rem;
    }
  }
`;

export default COLMain;
