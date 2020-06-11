import React, { useRef, useEffect, FC, useMemo, RefCallback } from 'react';
import useGlobalState from '../GlobalState';
import styled from 'styled-components';
import webHero from '../../images/web_hero.jpg';

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
  const imageRef = useRef(groupImage);
  if (imageRef.current !== groupImage) {
    imageRef.current = groupImage;
  }
  const doWhenIntersectRef = useRef<IntersectionObserverCallback>((entries) => {
    entries.forEach((entry) => {
      (() => {
        if (!entry.isIntersecting) return;
        setShownImgRef.current(imageRef.current);
      })();
    });
  });

  const observerRef = useRef<IntersectionObserver>(null as any);
  if (observerRef.current === null) {
    observerRef.current = new IntersectionObserver(doWhenIntersectRef.current, options);
  }
  const wrapperRef = useMemo<RefCallback<HTMLDivElement>>(
    () => (node) => {
      (() => {
        if (!node) return;
        observerRef.current.observe(node);
      })();
    },
    [],
  );

  useEffect(() => {
    setShownImgRef.current(webHero);
  }, [imageRef.current]);

  return (
    <Wrapper ref={wrapperRef} className={className}>
      {children}
    </Wrapper>
  );
};

interface WrapperProps {}

const Wrapper = styled.div<WrapperProps>``;

export default TextGroupWrapper;
