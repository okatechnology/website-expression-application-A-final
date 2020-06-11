import React from 'react';
import styled from 'styled-components';
import { buttonColor } from '../data/values';

interface BaseButtonProps {
  marginTop?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginRight?: number;
  width?: number;
  text: string;
  href: string;
}

const DEFAULT_WIDTH = 196;
const TRANSITION_DUR = 0.2;

const BaseButton = ({ text, ...props }: BaseButtonProps) => {
  return (
    <Button {...props}>
      <Triangle />
      {text}
    </Button>
  );
};

interface ButtonProps extends Omit<BaseButtonProps, 'href' | 'text'> {}

const Button = styled.a<ButtonProps>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop / 10 : 0)}rem;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft / 10 : 0)}rem;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight / 10 : 0)}rem;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom / 10 : 0)}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${buttonColor};
  background-color: #fff;
  border: 1px solid ${buttonColor};
  height: 4.8rem;
  width: 100%;
  max-width: ${({ width }) =>
    width !== undefined ? `${width / 10}rem` : `${DEFAULT_WIDTH / 10}rem`};
  border-radius: 1.2rem;
  font-size: 1.5rem;
  transition: background-color ${TRANSITION_DUR}s, color ${TRANSITION_DUR}s;

  &:hover {
    background-color: ${buttonColor};
    color: #fff;
    & > div {
      border-top: 0x solid transparent;
      border-bottom: 0px solid transparent;
      border-left: 0px solid ${buttonColor};
      margin: 0;
    }
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid ${buttonColor};
  margin-right: 0.5rem;
  transition: border-top ${TRANSITION_DUR}s, border-bottom ${TRANSITION_DUR}s,
    border-left ${TRANSITION_DUR}s, margin-right ${TRANSITION_DUR}s;
`;

export default BaseButton;
