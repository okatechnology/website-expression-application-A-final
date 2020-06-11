import React from 'react';
import StudentsWorkSectionData from '../../../data/studentsWorkSectionData';
import TextGroupWrapper from '../../TextGroupWrapper';
import StudentsWorkSection from './parts/StudentsWorkSection';
import styled from 'styled-components';

const StudentsWorkMain = () => {
  return (
    <Wrapper>
      {StudentsWorkSectionData.map((data) => (
        <StyledTextGroupWrapper groupImage={data.image} key={data.headline}>
          <StudentsWorkSection
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

export default StudentsWorkMain;
