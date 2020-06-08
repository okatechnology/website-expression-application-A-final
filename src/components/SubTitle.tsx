import React from 'react';
import styled from 'styled-components';
import { dhuColor } from '../data/value';

interface SubTitleProps {
  EnglishTitle: string;
  JapaneseTitle: string;
  marginTop: number;
}

const SubTitle = ({ EnglishTitle, JapaneseTitle, marginTop }: SubTitleProps) => {
  return (
    <>
      <Line marginTop={marginTop} />
      <EnglishText>{EnglishTitle}</EnglishText>
      <JapaneseText>{JapaneseTitle}</JapaneseText>
    </>
  );
};

interface LineProps {
  marginTop: number;
}

const Line = styled.span<LineProps>`
  display: block;
  width: 100%;
  height: 0.1rem;
  background-color: ${dhuColor};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
`;

const EnglishText = styled.h2`
  font-size: 4.8rem;
  margin: 2.4rem 0 0;
  font-family: 'tenali', sans-serif;
  font-weight: 400;
  line-height: 4.8rem;
`;

const JapaneseText = styled.p`
  font-size: 1.8rem;
  margin-top: 2.4rem;
`;

export default SubTitle;
