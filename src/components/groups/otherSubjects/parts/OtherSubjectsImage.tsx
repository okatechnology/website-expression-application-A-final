import React, { useRef } from 'react';
import styled from 'styled-components';
import useGlobalState from '../../../../GlobalState';
import { buttonColor } from '../../../../data/value';

interface OtherSubjectsImageProps {
  image: string;
  place: string;
  href: string;
  textGroupImage: string;
}

const OtherSubjectsImage = ({
  image,
  place,
  href,
  textGroupImage,
}: OtherSubjectsImageProps) => {
  const setGlobalImgRef = useRef(useGlobalState().setShownImg);
  return (
    <Wrapper image={image}>
      <Link
        href={href}
        onMouseOver={() => {
          setGlobalImgRef.current(image);
        }}
        onMouseOut={() => {
          setGlobalImgRef.current(textGroupImage);
        }}
      >
        {place}
      </Link>
    </Wrapper>
  );
};

interface WrapperProps {
  image: string;
}

const Wrapper = styled.li<WrapperProps>`
  background-image: url('${({ image }) => image}');
  background-position: center center;
  background-size: cover;
  height: 20rem;
  width: 100%;
  list-style: none;
  border-bottom: 3px solid ${buttonColor};
  border-right: 3px solid ${buttonColor};
`;

const Link = styled.a`
  font-size: 1.8rem;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0;
  transition: opacity 0.2s ease-out;
  text-shadow: 0 0 5px #000;
  padding: 0 3rem;
  font-weight: bold;
  &:hover {
    background-color: ${buttonColor}aa;
    opacity: 1;
  }
`;

export default OtherSubjectsImage;
