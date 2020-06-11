import React from 'react';
import styled from 'styled-components';
import BasicText from '../../../BasicText';
import { mediaQuery } from '../../../../data/values';

interface COLSectionProps {
  headline: string;
  explanation: string;
}

const COLSection = ({ headline, explanation }: COLSectionProps) => {
  return (
    <Wrapper>
      <Headline>
        {headline.split('\n').map((text) => (
          <TextBlock key={text}>{text}</TextBlock>
        ))}
      </Headline>
      <Description>{explanation}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Headline = styled.h3`
  font-size: 2.6rem;
  margin: 0;
  ${mediaQuery.forSp} {
    font-size: 2.2rem;
  }
`;

const TextBlock = styled.span`
  display: inline-block;
  ${mediaQuery.forSp} {
    display: inline;
  }
`;

const Description = styled(BasicText)`
  margin-top: 3.2rem;
  ${mediaQuery.forSp} {
    margin-top: 1.6rem;
  }
`;

export default COLSection;
