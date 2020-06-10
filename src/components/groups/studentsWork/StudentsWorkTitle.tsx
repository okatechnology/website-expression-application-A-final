import React from 'react';
import SubTitle from '../../SubTitle';
import TextGroupWrapper from '../../TextGroupWrapper';
import image from '../../../../images/garary.jpg';

const StudentsWorkTitle = () => {
  return (
    <TextGroupWrapper groupImage={image}>
      <SubTitle
        EnglishTitle="STUDENTS' WORK"
        JapaneseTitle="WEBデザイン・WEB開発の作品紹介"
      />
    </TextGroupWrapper>
  );
};

export default StudentsWorkTitle;
