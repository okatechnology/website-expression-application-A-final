import React, { FC } from 'react';
import Viewer from '../components/Viewer';
import FirstView from '../components/groups/first/FirstView';
import COLTitle from '../components/groups/characteristicOfLearning/COLTitle';
import COLMain from '../components/groups/characteristicOfLearning/COLMain';
import BaseButton from '../components/BaseButton';
import ScrollDownArrow from '../components/ScrollDownArrow';

const Top: FC = () => {
  return (
    <>
      <Viewer>
        <FirstView />
        <ScrollDownArrow />
        <COLTitle />
        <COLMain />
        <BaseButton href="#" marginTop={32}>
          Webデザイナーとは
        </BaseButton>
      </Viewer>
    </>
  );
};

export default Top;
