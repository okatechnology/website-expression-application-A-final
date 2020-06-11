import React from 'react';
import styled from 'styled-components';
import BasicText from '../../../BasicText';
import useWidthProvider from '../../../../WidthProvider';
import { mediaQuery } from '../../../../data/values';

interface StudentsWorkSectionProps {
  headline: string;
  explanation: string;
  sectionImg: string;
}

const StudentsWorkSection = ({
  headline,
  explanation,
  sectionImg,
}: StudentsWorkSectionProps) => {
  const twoColumn = useWidthProvider().twoColumn;
  return (
    <Wrapper>
      {!twoColumn && <WorkImg src={sectionImg} />}
      <Headline>{headline}</Headline>
      <Description>{explanation}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${mediaQuery.forTb} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 30%;
    grid-template-areas:
      'title title'
      'img   description';
    grid-column-gap: 1.6rem;
    grid-row-gap: 2.4rem;
    align-items: center;
  }
  ${mediaQuery.forSp} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'img'
      'description';
    grid-row-gap: 1.6rem;
  }
`;

const WorkImg = styled.img`
  ${mediaQuery.forTb} {
    display: block;
    width: 100%;
    align-self: start;
  }
`;

const Headline = styled.h3`
  font-size: 2rem;
  margin: 0;
  ${mediaQuery.forTb} {
    grid-area: title;
  }
  ${mediaQuery.forSp} {
    font-size: 1.8rem;
  }
`;

const Description = styled(BasicText)`
  margin-top: 3.2rem;
  ${mediaQuery.forTb} {
    margin: 0;
  }
`;

export default StudentsWorkSection;
