import React from 'react';
import SubTitle from '../../SubTitle';
import TextGroupWrapper from '../../TextGroupWrapper';
import image from '../../../../images/feature_classes_hero.jpg';

const CoursesTitle = () => {
  return (
    <TextGroupWrapper groupImage={image}>
      <SubTitle EnglishTitle="COURSES" JapaneseTitle="WEBデザイン・WEB開発の授業紹介" />
    </TextGroupWrapper>
  );
};

export default CoursesTitle;
