import React, { useRef, MutableRefObject, useEffect, FC } from 'react';
import useGlobalState from '../GlobalState';
import styled from 'styled-components';

interface TextGroupProps {
  groupImage: string;
  className?: string;
}

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: '-50% 0px',
  threshold: 0,
};

const TextGroupWrapper: FC<TextGroupProps> = ({ children, groupImage, className }) => {
  const setShownImgRef = useRef(useGlobalState().setShownImg);
  const doWhenIntersectRef: MutableRefObject<IntersectionObserverCallback> = useRef(
    (entries) => {
      entries.forEach((entry) => {
        (() => {
          if (!entry.isIntersecting) return;
          setShownImgRef.current(groupImage);
        })();
      });
    },
  );
  const observerRef = useRef<IntersectionObserver>(null as any);
  if (observerRef.current === null) {
    observerRef.current = new IntersectionObserver(doWhenIntersectRef.current, options);
  }
  const elementRef: MutableRefObject<HTMLDivElement> = useRef(null as any);
  useEffect(() => {
    observerRef.current.observe(elementRef.current);
  });

  return (
    <Wrapper ref={elementRef} className={className}>
      {children}
    </Wrapper>
  );
};

interface WrapperProps {}

const Wrapper = styled.div<WrapperProps>``;

export default TextGroupWrapper;
