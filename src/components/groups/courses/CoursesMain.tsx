import React from 'react';
import CoursesSectionData from '../../../data/coursesSectionData';
import TextGroupWrapper from '../../TextGroupWrapper';
import CoursesSection from './parts/CoursesSection';
import styled from 'styled-components';
import { mediaQuery } from '../../../data/values';

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
  ${mediaQuery.forSp} {
    margin-top: 9.6rem;
  }
`;

const StyledTextGroupWrapper = styled(TextGroupWrapper)`
  & + & {
    margin-top: 9.6rem;
  }
`;

export default CoursesMain;
