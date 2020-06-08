import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { dhuColor } from '../data/value';
const THRESHOUD = 10;

const ScrollDownArrow = () => {
  const [show, setShow] = useState(true);
  const showRef = useRef(show);
  const scrolled = useRef(true);

  useEffect(() => {
    const checkScrollPos = () => {
      (() => {
        requestAnimationFrame(checkScrollPos);
        if (!scrolled.current) return;
        scrolled.current = false;
        if (window.scrollY > THRESHOUD && showRef.current) {
          showRef.current = false;
          setShow(showRef.current);
        } else if (window.scrollY <= THRESHOUD && !showRef.current) {
          showRef.current = true;
          setShow(showRef.current);
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
    <Wrapper style={!show ? { display: 'none' } : undefined}>
      <ArrowPart location={1} />
      <ArrowPart location={-1} />
    </Wrapper>
  );
};

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
    transform: translateY(-2rem);
    opacity:0;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  position: fixed;
  bottom: 4.8rem;
  display: flex;
  width: calc(50% - 8rem);
  justify-content: center;
  animation: ${move} 2s infinite;
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
