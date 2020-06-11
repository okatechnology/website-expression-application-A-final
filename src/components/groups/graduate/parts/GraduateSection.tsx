import React from 'react';
import styled from 'styled-components';
import BasicText from '../../../BasicText';
import BaseButton from '../../../BaseButton';

interface FacultySectionProps {
  headline: string;
  explanation: string;
  detailsLink: string;
}

const GraduateSection = ({ headline, explanation, detailsLink }: FacultySectionProps) => {
  return (
    <Wrapper>
      <Headline>{headline}</Headline>
      <Description>{explanation}</Description>
      <BaseButton href={detailsLink} marginTop={16} width={120} text="詳細" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  & + & {
    margin-top: 9.6rem;
  }
`;

const Headline = styled.h3`
  font-size: 1.6rem;
  margin: 0;
`;

const Description = styled(BasicText)`
  margin-top: 1.6rem;
`;

export default GraduateSection;
