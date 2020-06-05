import React, { FC } from 'react';
import styled from 'styled-components';

const Text: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 80rem;
  width: calc(100% - 8rem);
  margin: 0 auto;
  font-size: 10rem;
`;

export default Text;
