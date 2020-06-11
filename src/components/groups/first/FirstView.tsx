import React, { useMemo } from 'react';
import styled from 'styled-components';
import BasicText from '../../BasicText';
import BaseButton from '../../BaseButton';
import { dhuColor, mediaQuery, textMargin } from '../../../data/values';
import TextGroupWrapper from '../../TextGroupWrapper';
import webHeroImg from '../../../../images/web_hero.jpg';
import whiteLogo from '../../../../images/dhu_logo_big_for_white.png';
import useWidthProvider from '../../../WidthProvider';

const FirstView = () => {
  const twoColumn = useWidthProvider().twoColumn;
  const image = useMemo(() => (twoColumn ? webHeroImg : whiteLogo), [twoColumn]);
  const titleBg = useMemo(() => (twoColumn ? undefined : `url('${webHeroImg}')`), [
    twoColumn,
  ]);
  return (
    <StyledTextGroupWrapper groupImage={image}>
      <div>
        <TitleWrapper style={{ backgroundImage: titleBg }}>
          <PageLocation>Webデザイン・Web開発</PageLocation>
          <Title>
            <TextBlock>Web業界を</TextBlock>
            <TextBlock>リードするための</TextBlock>
            <br />
            <TextBlock>知識と技術を</TextBlock>
            <TextBlock>手に入れる</TextBlock>
          </Title>
        </TitleWrapper>
        <Description>
          スマートフォンの普及、SNSの流行、ネットワークビジネスの拡大など、めざましい発展を続けるWeb業界。そこで求められる最先端の知識と技術を身につけられるのが、DHUの特長です。Webサイトの構築技法のみならず各種サービスの企画・運営についてまでを修得し業界の今、そしてこれからを活性化させる人材となることを目指します。
        </Description>
        <ButtonWrapper>
          <CustomedBaseButton href="#" text="資料請求はこちら" />
          <CustomedBaseButton href="#" text="オープンキャンパス" />
        </ButtonWrapper>
      </div>
    </StyledTextGroupWrapper>
  );
};

const PageLocation = styled.p`
  margin: 0;
  font-size: 2rem;

  ${mediaQuery.forTb} {
    color: #fff;
  }

  ${mediaQuery.forSp} {
    font-size: 1.6rem;
  }
`;

const Title = styled.h1`
  font-size: 4.6rem;
  margin: 3.2rem 0 0;
  color: ${dhuColor};

  ${mediaQuery.forSp} {
    font-size: 3rem;
    margin-top: 1.6rem;
  }
`;

const TextBlock = styled.span`
  display: inline-block;
  white-space: nowrap;
`;

const ButtonWrapper = styled.div`
  margin-top: 4.8rem;
  display: flex;

  ${mediaQuery.forSp} {
    margin-top: 3.2rem;
    display: block;
  }
`;

const StyledTextGroupWrapper = styled(TextGroupWrapper)`
  min-height: 100vh;
  display: flex;
  align-items: center;

  ${mediaQuery.forTb} {
    display: block;
  }
`;

const Description = styled(BasicText)`
  margin-top: 3.2rem;
  ${mediaQuery.forSp} {
    margin-top: 1.6rem;
  }
`;

const TitleWrapper = styled.div`
  display: block;

  ${mediaQuery.forTb} {
    min-height: 60vh;
    width: 100vw;
    margin-left: ${textMargin.tb * -1}px;
    padding-left: ${textMargin.tb}px;
    padding-top: 8rem;
    padding-bottom: 3.2rem;
    background-position: center center;
    background-size: cover;
    text-shadow: 0 0 5px #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  ${mediaQuery.forSp} {
    margin-left: ${textMargin.sp * -1}px;
    padding-left: ${textMargin.sp}px;
    padding-bottom: 1.6rem;
  }
`;

const CustomedBaseButton = styled(BaseButton)`
  & + & {
    margin: 0 0 0 4rem;
  }

  ${mediaQuery.forSp} {
    max-width: 100%;
    & + & {
      margin: 1.6rem 0 0;
    }
  }
`;

export default FirstView;
