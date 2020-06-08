import React, { ReactNode, useState, useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface TextGroupProps {
  children: ReactNode;
  groupImage: string;
}

const TextGroupWrapper = ({ children, groupImage }: TextGroupProps) => {
  const [ref, inView, entry] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  });
  const image = useRef(groupImage);
  return <div ref={ref}>{children}</div>;
};

export default TextGroupWrapper;
