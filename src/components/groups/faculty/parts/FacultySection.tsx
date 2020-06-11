import React from 'react';
import styled from 'styled-components';
import BasicText from '../../../BasicText';
import useWidthProvider from '../../../../WidthProvider';
import { mediaQuery } from '../../../../data/values';

interface FacultySectionProps {
  headline: string;
  explanation: string;
  sectionImg: string;
}

const FacultySection = ({ headline, explanation, sectionImg }: FacultySectionProps) => {
  const twoColumn = useWidthProvider().twoColumn;
  return (
    <Wrapper>
      {!twoColumn && <FacultyImg src={sectionImg} />}
      <Headline>{headline}</Headline>
      <Description>{explanation}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${mediaQuery.forTb} {
    display: grid;
    grid-template-areas:
      'img name'
      'img description';
    grid-column-gap: 3.2rem;
    grid-row-gap: 1.6rem;
    grid-template-columns: 20.8rem 1fr;
  }

  ${mediaQuery.forSp} {
    display: grid;
    grid-column-gap: 1.6rem;
    grid-row-gap: 0.8rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const FacultyImg = styled.img`
  ${mediaQuery.forTb} {
    display: block;
    width: 100%;
    grid-area: img;
  }
`;

const Headline = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  ${mediaQuery.forTb} {
    grid-area: name;
    align-self: flex-end;
  }
`;

const Description = styled(BasicText)`
  margin-top: 1.6rem;
  ${mediaQuery.forTb} {
    margin: 0;
    grid-area: description;
  }
`;

export default FacultySection;
