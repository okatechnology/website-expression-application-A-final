import React from 'react';
import CoursesSectionData from '../../../data/coursesSectionData';
import TextGroupWrapper from '../../TextGroupWrapper';
import CoursesSection from './parts/CoursesSection';
import styled from 'styled-components';

const CoursesMain = () => {
  return (
    <Wrapper>
      {CoursesSectionData.map((data) => (
        <StyledTextGroupWrapper groupImage={data.image} key={data.headline}>
          <CoursesSection
            headline={data.headline}
            explanation={data.explanation}
            sectionImg={data.image}
          />
        </StyledTextGroupWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12.8rem;
`;

const StyledTextGroupWrapper = styled(TextGroupWrapper)`
  & + & {
    margin-top: 9.6rem;
  }
`;

export default CoursesMain;
