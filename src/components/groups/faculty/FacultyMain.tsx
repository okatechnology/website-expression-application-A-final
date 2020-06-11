import React from 'react';
import FacultySectionData from '../../../data/facultySectionDatas';
import TextGroupWrapper from '../../TextGroupWrapper';
import FacultySection from './parts/FacultySection';
import styled from 'styled-components';
import BaseButton from '../../BaseButton';
import { mediaQuery } from '../../../data/values';

const FacultyMain = () => {
  return (
    <Wrapper>
      {FacultySectionData.map((data) => (
        <StyledTextGroupWrapper groupImage={data.image} key={data.headline}>
          <FacultySection
            headline={data.headline}
            explanation={data.explanation}
            sectionImg={data.image}
          />
        </StyledTextGroupWrapper>
      ))}
      <StyledBaseButton href="#" text="担当教員一覧" />
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
  ${mediaQuery.forTb} {
    & + & {
      margin-top: 4.8rem;
    }
  }
  ${mediaQuery.forSp} {
    & + & {
      margin-top: 3.2rem;
    }
  }
`;

const StyledBaseButton = styled(BaseButton)`
  margin-top: 9.6rem;

  ${mediaQuery.forSp} {
    margin-top: 6.4rem;
  }
`;

export default FacultyMain;
