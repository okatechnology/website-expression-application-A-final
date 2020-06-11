import React from 'react';
import styled from 'styled-components';
import BasicText from '../../../BasicText';
import { mediaQuery } from '../../../../data/values';
import useWidthProvider from '../../../../WidthProvider';

interface CoursesSectionProps {
  headline: string;
  explanation: string;
  sectionImg: string;
}

const CoursesSection = ({ headline, explanation, sectionImg }: CoursesSectionProps) => {
  const twoColumn = useWidthProvider().twoColumn;
  return (
    <Wrapper>
      <Headline>{headline}</Headline>
      <Description>{explanation}</Description>
      {!twoColumn && <SectionImg src={sectionImg} />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${mediaQuery.forTb} {
    display: grid;
    grid-template-areas:
      'title       title'
      'description img';
    grid-column-gap: 1.6rem;
    grid-row-gap: 2.4rem;
    grid-template-columns: 1fr 40%;
  }

  ${mediaQuery.forSp} {
    grid-template-areas:
      'title'
      'img'
      'description';
    grid-template-columns: 1fr;
    grid-row-gap: 1.6rem;
  }
`;

const SectionImg = styled.img`
  ${mediaQuery.forTb} {
    display: block;
    grid-area: img;
    width: 100%;
    align-self: center;
  }
`;

const Headline = styled.h3`
  font-size: 2.1rem;
  margin: 0;
  ${mediaQuery.forTb} {
    grid-area: title;
  }
`;

const Description = styled(BasicText)`
  margin-top: 2.4rem;

  ${mediaQuery.forTb} {
    grid-area: description;
    margin: 0;
  }
`;

export default CoursesSection;
