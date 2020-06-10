import React from 'react';
import FacultySectionData from '../../../data/facultySectionDatas';
import TextGroupWrapper from '../../TextGroupWrapper';
import FacultySection from './parts/FacultySection';
import styled from 'styled-components';
import BaseButton from '../../BaseButton';

const mainTexts = FacultySectionData.map((data) => (
  <TextGroupWrapper groupImage={data.image} key={data.headline}>
    <FacultySection headline={data.headline} explanation={data.explanation} />
  </TextGroupWrapper>
));

const FacultyMain = () => {
  return (
    <Wrapper>
      {mainTexts}
      <BaseButton href="#" marginTop={96} text="担当教員一覧" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12.8rem;
  & > div + div {
    margin-top: 9.6rem;
  }
`;

export default FacultyMain;
