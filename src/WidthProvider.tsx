import React, { useContext, FC, useState, useEffect, useMemo } from 'react';
import debounce from './utils/debounce';
import { breakpoint } from './data/values';

interface WidthProvierContext {
  width: number;
  twoColumn: boolean;
}

const useWidthProvider = () => useContext(useWidthProvider.context);
useWidthProvider.context = React.createContext<WidthProvierContext>(null as any);

export const WidthProvider: FC = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const twoColumn = useMemo(() => width > breakpoint.tb, [width]);
  useEffect(() => {
    const ev = debounce(() => {
      setWidth(window.innerWidth);
    }, 1000);
    window.addEventListener('resize', ev);
    return () => {
      window.removeEventListener('resize', ev);
    };
  }, []);
  return (
    <useWidthProvider.context.Provider value={{ width, twoColumn }} children={children} />
  );
};

export default useWidthProvider;
