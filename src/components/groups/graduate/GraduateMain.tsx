import React from 'react';
import graduateSectionData from '../../../data/graduateSectionData';
import TextGroupWrapper from '../../TextGroupWrapper';
import GraduateSection from './parts/GraduateSection';
import styled from 'styled-components';
import image from '../../../../images/office.jpg';

const GraduateMain = () => {
  return (
    <Wrapper>
      <TextGroupWrapper groupImage={image}>
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
`;

export default GraduateMain;
