import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { buttonColor } from '../data/value';

interface BaseButtonProps {
  marginTop?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginRight?: number;
  children: ReactNode;
  href: string
}

const BaseButton = (props: BaseButtonProps) => {
  return <Button {...props} />;
};

interface ButtonProps {
  marginTop?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginRight?: number;
}

const Button = styled.a<ButtonProps>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)}px;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${buttonColor};
  border: 1px solid ${buttonColor};
  height: 4.8rem;
  width: 100%;
  max-width: 19.6rem;
  border-radius: 1.2rem;
  font-size: 1.4rem;
  transition: background-color 0.2s, color 0.2s;

  &:hover{
    background-color: ${buttonColor};
    color: #fff;
  }
`;

export default BaseButton;
