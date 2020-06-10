import prototype from '../../images/classes_prototyping.jpg';
import createSite from '../../images/classes_development.jpg';
import zemi from '../../images/classes_seminar.jpg';

const datas: SectionData[] = [
  {
    headline: 'Webサイトプロトタイプ演習',
    explanation:
      'サイトマップ、ワイヤーフレーム、プロトタイプの制作は、Webサイト制作において大変重要です。実際に完成させたサイトを手戻りなくするため、Webサイト構築を行なう上で重要となる「設計フェーズ」の理解を深め、精度の高いワイヤーフレームやプロトタイプを出来るようにします。また、プロトタイピングツールを利用した効率の良いプロトタイピング作成手法を理解し、スムーズなWebサイト制作ができる技術を学びます。',
    image: prototype,
  },
  {
    headline: 'Webサイト制作実践演習',
    explanation:
      'デザインカンプなどを元にコーディング計画を立て、Webサイトの文書構造をイメージし、それを形にするためのHTML、CSSマークアップを繰り返し行なうことで、実務レベルでのWebコーディング手法を理解していきます。さらにアクセシビリティの考え方、レスポンシブWebデザイン、CSSフレームワーク、コーディング効率化を学び、高精度のWebコーディングスキルを習得していきます。',
    image: createSite,
  },
  {
    headline: 'コンテンツデザインゼミ',
    explanation:
      'デザインと技術とユーモアを複合的に考え、問題解決のためのアプローチ方法の探求、社会との関係を築くモノ創り、インターネットを活用して自分や自分たちの周りを少し豊かにする方法を考えるといった活動を行っていきます。ゼミで様々な活動やコミュニケーションを行っていく中で、個別に自らが実現したい卒業制作のテーマを設定し、卒業制作を行っていきます。',
    image: zemi,
  },
];

export default datas;
