import React, { useContext, FC, useState } from 'react';

interface GlobalStateContextValue {
  shownImg: number;
  setShownImg: (n: number) => void;
}

const useGlobalState = () => useContext(useGlobalState.context);
useGlobalState.context = React.createContext<GlobalStateContextValue>(null as any);

export const GlobalStateProvider: FC = ({ children }) => {
  const [shownImg, setShownImg] = useState<number>(0);

  return (
    <useGlobalState.context.Provider
      value={{ shownImg, setShownImg }}
      children={children}
    />
  );
};

export default useGlobalState;
