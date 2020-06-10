import React, { FC, useEffect } from 'react';
import Viewer from '../components/Viewer';
import FirstView from '../components/groups/first/FirstView';
import COLTitle from '../components/groups/characteristicOfLearning/COLTitle';
import COLMain from '../components/groups/characteristicOfLearning/COLMain';
import ScrollDownArrow from '../components/ScrollDownArrow';
import CoursesTitle from '../components/groups/courses/CoursesTitle';
import CoursesMain from '../components/groups/courses/CoursesMain';
import FacultyTitle from '../components/groups/faculty/FacultyTitle';
import FacultyMain from '../components/groups/faculty/FacultyMain';
import StudentsWorkTitle from '../components/groups/studentsWork/StudentsWorkTitle';
import StudentsWorkMain from '../components/groups/studentsWork/StudentsWorkMain';
import GraduateTitle from '../components/groups/graduate/GraduateTitle';
import GraduateMain from '../components/groups/graduate/GraduateMain';
import OtherSubjectsTitle from '../components/groups/otherSubjects/OtherSubjectsTitle';
import OtherSubjectsMain from '../components/groups/otherSubjects/OtherSubjectsMain';

const Top: FC = () => {
  useEffect(() => {
    document.title = 'DHU Web';
  });
  return (
    <>
      <Viewer>
        <FirstView />
        <ScrollDownArrow />
        <COLTitle />
        <COLMain />
        <CoursesTitle />
        <CoursesMain />
        <FacultyTitle />
        <FacultyMain />
        <StudentsWorkTitle />
        <StudentsWorkMain />
        <GraduateTitle />
        <GraduateMain />
        <OtherSubjectsTitle />
        <OtherSubjectsMain />
      </Viewer>
    </>
  );
};

export default Top;
