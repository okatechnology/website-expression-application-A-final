interface GraduateSectionData extends Omit<SectionData, 'image'> {
  detailsLink: string;
}

const datas: GraduateSectionData[] = [
  {
    headline: '和田 泰弘さん ＜株式会社サイバーエージェント＞',
    explanation:
      '自分で事業をつくりたいという想いからDHUに入学。Webをイチから学び、在学中から、フリーのWebデザイナーになり、作ったサイトの数は100を越えました。サイバーエージェントへの就職も決まりました。就職先にも応援してもらいながら、撮影機材のシェアリングサービスを在学中に起業することもできました。',
    detailsLink: '#',
  },
  {
    headline: '髙栁 綾 さん ＜ヤフー株式会社＞',
    explanation:
      'Webやグラフィックデザイン、英語の授業に夢中になりました。3年の夏に、ヤフー、ネクスト、広告代理店の3社のインターンシップに参加。実践力がつき、就職用のポートフォリオも充実しました。ヤフーでは、提案した企画が高評価をいただき、社員の方と話すうちに「この会社に入りたい！」という気持ちに。',
    detailsLink: '#',
  },
];

export default datas;
