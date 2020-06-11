import { createGlobalStyle } from 'styled-components';
import TenaliRamakrishnaRegular from '../webfonts/TenaliRamakrishna-Regular.ttf';
import { mediaQuery } from './data/values';

const FONTFACE_CIRCULAR = `
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
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", Arial, メイリオ, Meiryo, sans-serif;
    font-weight: 400 !important;
    letter-spacing: 1px;letter-spacing

    ${mediaQuery.forTb} {
      text-shadow: 0 0 5px #fff;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
