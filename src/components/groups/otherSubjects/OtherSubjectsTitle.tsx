import React from 'react';
import SubTitle from '../../SubTitle';
import TextGroupWrapper from '../../TextGroupWrapper';
import dhuLogoImg from '../../../../images/dhu_logo_big.png';

const OtherSubjectsTitle = () => {
  return (
    <TextGroupWrapper groupImage={dhuLogoImg}>
      <SubTitle EnglishTitle="OTHER SUBJECTS" JapaneseTitle="他の専門教育" />
    </TextGroupWrapper>
  );
};

export default OtherSubjectsTitle;
