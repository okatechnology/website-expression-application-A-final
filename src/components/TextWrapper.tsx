import React, { FC } from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../data/values';

const TextWrapper: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 80rem;
  width: calc(100% - 8rem);
  margin: 0 auto;
  font-size: 10rem;
  padding: 0 0 8rem;

  ${mediaQuery.forSp} {
    width: calc(100% - 3.2rem);
    padding: 0 0 4rem;
  }
`;

export default TextWrapper;
