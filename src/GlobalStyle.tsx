import { createGlobalStyle } from 'styled-components';
import notoLight from '../webfonts/NotoSansJP-Light.otf';
import notoMedium from '../webfonts/NotoSansJP-Medium.otf';
import TenaliRamakrishnaRegular from '../webfonts/TenaliRamakrishna-Regular.ttf';

const FONTFACE_CIRCULAR = `
  @font-face{
    font-family:'noto';
    src: url('${notoLight}') format('opentype');
    font-weight: normal;
  }
  @font-face{
    font-family:'noto';
    src: url('${notoMedium}') format('opentype');
    font-weight: bold;
  }
  @font-face{
    font-family:'tenali';
    src: url('${TenaliRamakrishnaRegular}') format('truetype');
  }
`;

export const loadFonts = () => {
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.innerHTML = FONTFACE_CIRCULAR;
  head.appendChild(style);
};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: 'noto', sans-serif;
    font-weight: normal;
    letter-spacing: 1px;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
