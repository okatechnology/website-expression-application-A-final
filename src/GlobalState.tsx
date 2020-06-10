import React, { useContext, FC, useState } from 'react';
import defaultImg from '../images/dhu_logo_big.png';

interface GlobalStateContextValue {
  shownImg: string;
  setShownImg: (n: string) => void;
}

const useGlobalState = () => useContext(useGlobalState.context);
useGlobalState.context = React.createContext<GlobalStateContextValue>(null as any);

export const GlobalStateProvider: FC = ({ children }) => {
  const [shownImg, setShownImg] = useState<string>(defaultImg);

  return (
    <useGlobalState.context.Provider
      value={{ shownImg, setShownImg }}
      children={children}
    />
  );
};

export default useGlobalState;
