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
      <div>
        <Headline>{headline}</Headline>
        <Description>{explanation}</Description>
      </div>
      {!twoColumn && <SectionImg src={sectionImg} />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${mediaQuery.forTb} {
    display: flex;
    align-items: center;
  }
`;

const SectionImg = styled.img`
  ${mediaQuery.forTb} {
    display: block;
    width: 40rem;
    max-width: 40%;
    margin-left: 1.6rem;
  }
`;

const Headline = styled.h3`
  font-size: 2.1rem;
  margin: 0;
`;

const Description = styled(BasicText)`
  margin-top: 2.4rem;
`;

export default CoursesSection;
