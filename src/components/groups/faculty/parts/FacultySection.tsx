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
      <div>
        <Headline>{headline}</Headline>
        <Description>{explanation}</Description>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${mediaQuery.forTb} {
    display: flex;
    align-items: center;
  }
`;

const FacultyImg = styled.img`
  ${mediaQuery.forTb} {
    display: block;
    width: 20.8rem;
    margin-right: 4rem;
  }
`;

const Headline = styled.h3`
  font-size: 1.8rem;
  margin: 0;
`;

const Description = styled(BasicText)`
  margin-top: 1.6rem;
`;

export default FacultySection;
