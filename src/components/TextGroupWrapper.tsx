import React, { ReactNode, useRef, MutableRefObject, useEffect } from 'react';
import useGlobalState from '../GlobalState';

interface TextGroupProps {
  children: ReactNode;
  groupImage: string;
}

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: '-50% 0px',
  threshold: 0,
};

const TextGroupWrapper = ({ children, groupImage }: TextGroupProps) => {
  const setShownImgRef = useRef(useGlobalState().setShownImg);
  const doWhenIntersectRef: MutableRefObject<IntersectionObserverCallback> = useRef(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShownImgRef.current(groupImage);
        }
      });
    },
  );
  const observerRef = useRef(
    new IntersectionObserver(doWhenIntersectRef.current, options),
  );
  const elementRef: MutableRefObject<HTMLDivElement> = useRef(null as any);
  useEffect(() => {
    observerRef.current.observe(elementRef.current);
  });

  return <div ref={elementRef}>{children}</div>;
};

export default TextGroupWrapper;
