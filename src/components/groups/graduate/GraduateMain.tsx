import React, { Fragment } from 'react';
import graduateSectionData from '../../../data/graduateSectionData';
import TextGroupWrapper from '../../TextGroupWrapper';
import GraduateSection from './parts/GraduateSection';
import styled from 'styled-components';
import image from '../../../../images/office.jpg';

const mainTexts = graduateSectionData.map((data) => (
  <Fragment key={data.headline}>
    <GraduateSection
      headline={data.headline}
      explanation={data.explanation}
      detailsLink={data.detailsLink}
    />
  </Fragment>
));

const GraduateMain = () => {
  return (
    <Wrapper>
      <TextGroupWrapper groupImage={image}>{mainTexts}</TextGroupWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12.8rem;
`;

export default GraduateMain;
