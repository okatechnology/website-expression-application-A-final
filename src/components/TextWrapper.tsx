import React, { FC } from 'react';
import styled from 'styled-components';
import { mediaQuery, textMargin } from '../data/values';

const TextWrapper: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 80rem;
  width: calc(100% - ${textMargin.default * 2}px);
  margin: 0 auto;
  font-size: 10rem;
  padding: 0 0 ${textMargin.default}px;

  ${mediaQuery.forSp} {
    width: calc(100% - ${textMargin.sp * 2}px);
    padding: 0 0 ${textMargin.sp}px;
  }
`;

export default TextWrapper;
