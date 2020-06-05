import React from 'react';
import styled from 'styled-components';
import { dhuColor } from '../data/value';

const Line = () => {
  return <Item />;
};

const Item = styled.span`
  display: block;
  width: 100%;
  height: 0.1rem;
  background-color: ${dhuColor};
`;

export default Line;
