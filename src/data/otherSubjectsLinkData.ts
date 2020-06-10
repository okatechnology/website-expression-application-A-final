import threeDCGImg from '../../images/3dcg.jpg';
import gameImg from '../../images/game.jpg';
import movieImg from '../../images/movie.jpg';
import graphicImg from '../../images/graphic.jpg';
import animeImg from '../../images/anime.jpg';
import webImg from '../../images/web.jpg';
import vrarImg from '../../images/vrar.jpg';
import koukokuImg from '../../images/koukoku.jpg';

interface LinkData {
  image: string;
  place: string;
  href: string;
}

const linkData: LinkData[] = [
  {
    image: threeDCGImg,
    place: '3DCG・VFX',
    href: '#',
  },
  {
    image: gameImg,
    place: 'ゲーム・プログラミング',
    href: '#',
  },
  {
    image: movieImg,
    place: '映像・映画',
    href: '#',
  },
  {
    image: graphicImg,
    place: 'グラフィック・デザイン',
    href: '#',
  },
  {
    image: animeImg,
    place: 'アニメ',
    href: '#',
  },
  {
    image: webImg,
    place: 'Webデザイン・Web開発',
    href: '#',
  },
  {
    image: vrarImg,
    place: 'VR/AR・メディアアート',
    href: '#',
  },
  {
    image: koukokuImg,
    place: '広告・起業・アントレプレナーシップ',
    href: '#',
  },
];

export default linkData;
