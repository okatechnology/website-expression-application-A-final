import React from 'react';
import SubTitle from '../../SubTitle';
import TextGroupWrapper from '../../TextGroupWrapper';
import image from '../../../../images/office.jpg';

const GraduateTitle = () => {
  return (
    <TextGroupWrapper groupImage={image}>
      <SubTitle EnglishTitle="GRADUATE" JapaneseTitle="WEBデザイン・WEB開発の卒業生" />
    </TextGroupWrapper>
  );
};

export default GraduateTitle;
