import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { dhuColor } from '../data/value';
const THRESHOUD = 10;

const ScrollDownArrow = () => {
  const [show, setShow] = useState(true);
  const [showArrow, setArrow] = useState(true);
  const showRef = useRef(show);
  showRef.current = show;
  const scrolled = useRef(true);

  useEffect(() => {
    const checkScrollPos = () => {
      (() => {
        requestAnimationFrame(checkScrollPos);
        if (!scrolled.current) return;
        scrolled.current = false;
        if (window.scrollY > THRESHOUD && showRef.current) {
          setShow(false);
        } else if (window.scrollY <= THRESHOUD && !showRef.current) {
          setShow(true);
        }
      })();
    };
    checkScrollPos();
    const turnScrolledOn = () => {
      scrolled.current = true;
    };

    window.addEventListener('scroll', turnScrolledOn);
    return () => {
      window.removeEventListener('scroll', turnScrolledOn);
    };
  }, []);

  return (
    <Wrapper
      show={show}
      onAnimationEnd={() => {
        setArrow(show);
      }}
    >
      <Arrow show={showArrow}>
        <ArrowPart location={1} />
        <ArrowPart location={-1} />
      </Arrow>
    </Wrapper>
  );
};

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeout = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

interface WrapperProps {
  show: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  animation: ${({ show }) => (show ? fadein : fadeout)} 0.3s;
`;

const move = keyframes`
  0%{
    transfomr: translateY(0);
    opacity: 0
  }
  25%{
    opacity: 1;
  }
  75%{
    opacity: 1;
  }
  100%{
    transform: translateY(-3rem);
    opacity:0;
  }
`;

interface ArrowProps {
  show: boolean;
}

const Arrow = styled.div<ArrowProps>`
  margin: 0 auto;
  position: fixed;
  bottom: 4.8rem;
  width: calc(50% - 8rem);
  justify-content: center;
  animation: ${move} 2s infinite ease-in-out;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`;

interface ArrowPartProps {
  location: 1 | -1;
}

const ArrowPart = styled.span<ArrowPartProps>`
  display: block;
  background-color: ${dhuColor};
  height: 0.4rem;
  width: 3.6rem;
  border-radius: 1rem;
  transform: translateX(${({ location }) => location * 0.4}rem)
    rotate(${({ location }) => location * 30}deg);
`;

export default ScrollDownArrow;
