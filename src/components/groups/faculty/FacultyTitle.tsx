import React from 'react';
import SubTitle from '../../SubTitle';
import TextGroupWrapper from '../../TextGroupWrapper';
import image from '../../../../images/teachers_hero.jpg';

const FacultyTitle = () => {
  return (
    <TextGroupWrapper groupImage={image}>
      <SubTitle
        EnglishTitle="THE FACULTY"
        JapaneseTitle="WEBデザイン・WEB開発の担当教員"
      />
    </TextGroupWrapper>
  );
};

export default FacultyTitle;
