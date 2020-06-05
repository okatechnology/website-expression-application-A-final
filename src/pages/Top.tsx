import React, { FC } from 'react';
import Viewer from '../components/Viewer';
import FirstView from '../groups/first/FirstView';
import Line from '../components/Line';

const Top: FC = () => {
  return (
    <>
      <Viewer>
        <FirstView />
        <Line />
      </Viewer>
    </>
  );
};

export default Top;
