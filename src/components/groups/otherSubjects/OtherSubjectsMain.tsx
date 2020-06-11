import React, { useMemo } from 'react';
import linkData from '../../../data/otherSubjectsLinkData';
import OtherSubjectsImage from './parts/OtherSubjectsImage';
import styled from 'styled-components';
import TextGroupWrapper from '../../TextGroupWrapper';
import dhuLogoForBlack from '../../../../images/dhu_logo_big.png';
import dhuLogoForWhite from '../../../../images/dhu_logo_big_for_white.png';
import useWidthProvider from '../../../WidthProvider';
import { mediaQuery } from '../../../data/values';

const OtherSubjectsMain = () => {
  const twoColumn = useWidthProvider().twoColumn;
  const groupImage = useMemo(() => (twoColumn ? dhuLogoForBlack : dhuLogoForWhite), [
    twoColumn,
  ]);
  return (
    <TextGroupWrapper groupImage={groupImage}>
      <Wrapper>
        {linkData.map((data) => (
          <OtherSubjectsImage
            image={data.image}
            href={data.href}
            place={data.place}
            key={data.place}
          />
        ))}
      </Wrapper>
    </TextGroupWrapper>
  );
};

const Wrapper = styled.ul`
  margin: 12.8rem 0 0;
  padding: 0;
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr 1fr;

  ${mediaQuery.forSp} {
    margin: 9.6rem 0 0;
    gap: 0.8rem;
  }
`;

export default OtherSubjectsMain;
