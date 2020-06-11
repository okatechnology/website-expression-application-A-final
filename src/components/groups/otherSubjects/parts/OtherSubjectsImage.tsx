import React, { useRef, useMemo } from 'react';
import styled from 'styled-components';
import useGlobalState from '../../../../GlobalState';
import { buttonColor, mediaQuery } from '../../../../data/values';
import useWidthProvider from '../../../../WidthProvider';
import dhuLogoForBlack from '../../../../../images/dhu_logo_big.png';
import dhuLogoForWhite from '../../../../../images/dhu_logo_big_for_white.png';

interface OtherSubjectsImageProps {
  image: string;
  place: string;
  href: string;
}

const OtherSubjectsImage = ({ image, place, href }: OtherSubjectsImageProps) => {
  const twoColumn = useWidthProvider().twoColumn;
  const groupImage = useMemo(() => (twoColumn ? dhuLogoForBlack : dhuLogoForWhite), [
    twoColumn,
  ]);
  const setGlobalImgRef = useRef(useGlobalState().setShownImg);
  return (
    <Wrapper style={{ backgroundImage: `url('${image}')` }}>
      <Link
        href={href}
        onMouseOver={() => {
          setGlobalImgRef.current(image);
        }}
        onMouseOut={() => {
          setGlobalImgRef.current(groupImage);
        }}
      >
        <LinkText>{place}</LinkText>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  background-position: center center;
  background-size: cover;
  height: 20rem;
  width: 100%;
  list-style: none;
  border-bottom: 3px solid ${buttonColor};
  border-right: 3px solid ${buttonColor};

  ${mediaQuery.forSp} {
    height: 15rem;
  }
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
  :hover {
    background-color: ${buttonColor}aa;
    opacity: 1;
  }

  ${mediaQuery.forTb} {
    opacity: 1;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0 0 0 3rem;
    font-size: 1.6rem;

    :hover {
      background-color: transparent;
    }
  }

  ${mediaQuery.forSp} {
    font-size: 1.4rem;
    padding: 0 0 0 1.6rem;
  }
`;

const LinkText = styled.span`
  ${mediaQuery.forTb} {
    display: block;
    background-color: ${buttonColor};
    border-radius: 2.4rem 0 0;
    padding: 0.8rem 0.8rem 0.8rem 1.6rem;
    text-shadow: none;
  }
  ${mediaQuery.forSp} {
    border-radius: 1.2rem 0 0;
    padding: 0.4rem 0.4rem 0.4rem 0.8rem;
  }
`;

export default OtherSubjectsImage;
