import React from 'react';
import StudentsWorkSectionData from '../../../data/StudentsWorkSectionData';
import TextGroupWrapper from '../../TextGroupWrapper';
import StudentsWorkSection from './parts/StudentsWorkSection';
import styled from 'styled-components';

const mainTexts = StudentsWorkSectionData.map((data) => (
  <TextGroupWrapper groupImage={data.image} key={data.headline}>
    <StudentsWorkSection headline={data.headline} explanation={data.explanation} />
  </TextGroupWrapper>
));

const StudentsWorkMain = () => {
  return <Wrapper>{mainTexts}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 12.8rem;
  & > div + div {
    margin-top: 9.6rem;
  }
`;

export default StudentsWorkMain;
