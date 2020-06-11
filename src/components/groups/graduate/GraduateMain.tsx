import React from 'react';
import graduateSectionData from '../../../data/graduateSectionData';
import TextGroupWrapper from '../../TextGroupWrapper';
import GraduateSection from './parts/GraduateSection';
import styled from 'styled-components';
import image from '../../../../images/office.jpg';
import { mediaQuery } from '../../../data/values';

const GraduateMain = () => {
  return (
    <Wrapper>
      <TextGroupWrapper groupImage={image} noMark={true}>
        {graduateSectionData.map((data) => (
          <GraduateSection
            headline={data.headline}
            explanation={data.explanation}
            detailsLink={data.detailsLink}
            key={data.headline}
          />
        ))}
      </TextGroupWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12.8rem;
  ${mediaQuery.forSp} {
    margin-top: 9.6;
  }
`;

export default GraduateMain;
