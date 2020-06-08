import React from 'react';
import SubTitle from '../../SubTitle';
import TextGroupWrapper from '../../TextGroupWrapper';
import webOverviewPoster from '../../../../images/web_overview_poster.jpg';

const COLTitle = () => {
  return (
    <TextGroupWrapper groupImage={webOverviewPoster}>
      <SubTitle
        marginTop={0}
        EnglishTitle="CHARACTERISTICS OF LEARNING"
        JapaneseTitle="学びの特色"
      />
    </TextGroupWrapper>
  );
};

export default COLTitle;
