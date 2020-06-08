import React, { useMemo } from 'react';
import styled from 'styled-components';
import BasicText from '../../../BasicText';

interface COLSectionProps {
  headline: string;
  explanation: string;
}

const COLSection = ({ headline, explanation }: COLSectionProps) => {
  const organizedHeadline = useMemo(
    () =>
      headline.split('\n').map((text, i) =>
        i === 0 ? (
          <span key={text}>{text}</span>
        ) : (
          <span key={text}>
            <br />
            {text}
          </span>
        ),
      ),
    [headline],
  );
  return (
    <Wrapper>
      <Headline>{organizedHeadline}</Headline>
      <BasicText marginTop={32}>{explanation}</BasicText>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Headline = styled.h3`
  font-size: 2.4rem;
`;

export default COLSection;
