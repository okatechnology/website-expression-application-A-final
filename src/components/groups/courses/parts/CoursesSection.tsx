import React from 'react';
import styled from 'styled-components';
import BasicText from '../../../BasicText';

interface CoursesSectionProps {
  headline: string;
  explanation: string;
}

const CoursesSection = ({ headline, explanation }: CoursesSectionProps) => {
  return (
    <Wrapper>
      <Headline>{headline}</Headline>
      <BasicText marginTop={32}>{explanation}</BasicText>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Headline = styled.h3`
  font-size: 2.1rem;
`;

export default CoursesSection;
