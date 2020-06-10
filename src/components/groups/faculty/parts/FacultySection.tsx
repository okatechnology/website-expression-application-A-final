import React from 'react';
import styled from 'styled-components';
import BasicText from '../../../BasicText';

interface FacultySectionProps {
  headline: string;
  explanation: string;
}

const FacultySection = ({ headline, explanation }: FacultySectionProps) => {
  return (
    <Wrapper>
      <Headline>{headline}</Headline>
      <BasicText marginTop={16}>{explanation}</BasicText>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Headline = styled.h3`
  font-size: 1.8rem;
`;

export default FacultySection;
