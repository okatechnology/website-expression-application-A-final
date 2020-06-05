import React from 'react';
import styled from 'styled-components';
import BasicText from '../../components/BasicText';
import BaseButton from '../../components/BaseButton';
import { dhuColor } from '../../data/value';
import TextGroupWrapper from '../../components/TextGroupWrapper';
import webHero from '../../../images/web_hero.jpg';

const FirstView = () => {
  return (
    <TextGroupWrapper groupImage={webHero}>
      <Wrapper>
        <div>
          <PageLocation>Webデザイン・Web開発</PageLocation>
          <Title>
            <TextBlock>Web業界を</TextBlock>
            <TextBlock>リードするための</TextBlock>
            <br />
            <TextBlock>知識と技術を</TextBlock>
            <TextBlock>手に入れる</TextBlock>
          </Title>
          <BasicText marginTop={48}>
            スマートフォンの普及、SNSの流行、ネットワークビジネスの拡大など、めざましい発展を続けるWeb業界。そこで求められる最先端の知識と技術を身につけられるのが、DHUの特長です。Webサイトの構築技法のみならず各種サービスの企画・運営についてまでを修得し業界の今、そしてこれからを活性化させる人材となることを目指します。
          </BasicText>
          <ButtonWrapper>
            <BaseButton href="#" marginRight={40}>
              資料請求はこちら
            </BaseButton>
            <BaseButton href="#">オープンキャンパス</BaseButton>
          </ButtonWrapper>
        </div>
      </Wrapper>
    </TextGroupWrapper>
  );
};

const PageLocation = styled.p`
  margin-top: 0;
  font-size: 2rem;
`;

const Title = styled.h1`
  font-size: 4.6rem;
  margin-top: 4.8rem;
  color: ${dhuColor};
`;

const TextBlock = styled.span`
  display: inline-block;
  white-space: nowrap;
`;

const ButtonWrapper = styled.div`
  margin-top: 4.8rem;
  display: flex;
  /* flex-wrap: wrap; */
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export default FirstView;
