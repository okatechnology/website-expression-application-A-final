import React, { useRef, useEffect, FC, useMemo, RefCallback } from 'react';
import useGlobalState from '../GlobalState';
import styled from 'styled-components';
import webHero from '../../images/web_hero.jpg';
import { textMargin, dhuColor, mediaQuery } from '../data/values';

interface TextGroupProps {
  groupImage: string;
  className?: string;
  noMark?: boolean;
}

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: '-50% 0px',
  threshold: 0,
};

const TextGroupWrapper: FC<TextGroupProps> = ({
  children,
  groupImage,
  className,
  noMark,
}) => {
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

  const shownImg = useGlobalState().shownImg;
  const leftBarOn = useMemo(() => !noMark && imageRef.current === shownImg, [shownImg]);

  useEffect(() => {
    setShownImgRef.current(webHero);
  }, [imageRef.current]);

  return (
    <Wrapper ref={wrapperRef} className={className}>
      <LeftMark show={leftBarOn} />
      {children}
    </Wrapper>
  );
};

interface WrapperProps {}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
`;

const LeftMark = styled.div<{ show: boolean }>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.3s;
  position: absolute;
  left: ${(textMargin.default * -1) / 10}rem;
  top: calc(50% - ${textMargin.default / 2 / 10}rem);
  height: ${textMargin.default / 10}rem;
  width: ${textMargin.default / 2 / 10}rem;
  border-radius: 0 99px 99px 0;
  background-color: ${dhuColor};

  ${mediaQuery.forTb} {
    display: none;
  }
`;

export default TextGroupWrapper;
