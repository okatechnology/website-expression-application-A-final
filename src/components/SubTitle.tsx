import React from 'react';
import styled from 'styled-components';
import { dhuColor, mediaQuery } from '../data/values';

interface SubTitleProps {
  EnglishTitle: string;
  JapaneseTitle: string;
  className?: string;
}

const SubTitle = ({ EnglishTitle, JapaneseTitle, className }: SubTitleProps) => {
  return (
    <Wrapper className={className}>
      <Line />
      <EnglishText>{EnglishTitle}</EnglishText>
      <JapaneseText>{JapaneseTitle}</JapaneseText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 19.2rem;

  & + * {
    margin-top: 12.8rem;
  }

  ${mediaQuery.forSp} {
    margin-top: 12.8rem;

    & + * {
      margin-top: 9.6rem;
    }
  }
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 0.1rem;
  background-color: ${dhuColor};
`;

const EnglishText = styled.h2`
  font-size: 4.8rem;
  margin: 2.4rem 0 0;
  font-family: 'tenali', sans-serif;
  font-weight: 400;
  line-height: 4.8rem;

  ${mediaQuery.forSp} {
    font-size: 4rem;
    line-height: 4rem;
  }
`;

const JapaneseText = styled.p`
  font-size: 1.8rem;
  margin-top: 1.6rem;
  ${mediaQuery.forSp} {
    margin-top: 0.8rem;
  }
`;

export default SubTitle;
