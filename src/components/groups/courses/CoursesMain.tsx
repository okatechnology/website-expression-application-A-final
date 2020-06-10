import React from 'react';
import CoursesSectionData from '../../../data/coursesSectionData';
import TextGroupWrapper from '../../TextGroupWrapper';
import CoursesSection from './parts/CoursesSection';
import styled from 'styled-components';

const mainTexts = CoursesSectionData.map((data) => (
  <TextGroupWrapper groupImage={data.image} key={data.headline}>
    <CoursesSection headline={data.headline} explanation={data.explanation} />
  </TextGroupWrapper>
));

const CoursesMain = () => {
  return <Wrapper>{mainTexts}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 12.8rem;
  & > div + div {
    margin-top: 9.6rem;
  }
`;

export default CoursesMain;
