import React from 'react';
import SubTitle from '../../SubTitle';
import TextGroupWrapper from '../../TextGroupWrapper';
import webOverviewPoster from '../../../../images/web_overview_poster.jpg';
import { mediaQuery } from '../../../data/values';
import styled from 'styled-components';

const COLTitle = () => {
  return (
    <TextGroupWrapper groupImage={webOverviewPoster}>
      <CustomedSubTitle
        EnglishTitle="CHARACTERISTICS OF LEARNING"
        JapaneseTitle="学びの特色"
      />
    </TextGroupWrapper>
  );
};

const CustomedSubTitle = styled(SubTitle)`
  margin-top: 0;
  ${mediaQuery.forSp} {
    margin-top: 6.4rem;
  }
`;

export default COLTitle;
