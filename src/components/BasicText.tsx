import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BasicTextProps {
  children: ReactNode;
  marginTop: number;
}

const BasicText = ({ children, marginTop }: BasicTextProps) => {
  return <Text marginTop={marginTop}>{children}</Text>;
};

interface TextProps {
  marginTop: number;
}

const Text = styled.p<TextProps>`
  font-size: 1.6rem;
  line-height: 2.8rem;
  margin-top: ${({ marginTop }) => marginTop / 10}rem;
`;

export default BasicText;
