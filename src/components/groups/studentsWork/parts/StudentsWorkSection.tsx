import React from 'react';
import styled from 'styled-components';
import BasicText from '../../../BasicText';

interface StudentsWorkSectionProps {
  headline: string;
  explanation: string;
}

const StudentsWorkSection = ({ headline, explanation }: StudentsWorkSectionProps) => {
  return (
    <Wrapper>
      <Headline>{headline}</Headline>
      <BasicText marginTop={32}>{explanation}</BasicText>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Headline = styled.h3`
  font-size: 2rem;
`;

export default StudentsWorkSection;
