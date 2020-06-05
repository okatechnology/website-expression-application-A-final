import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'noto';
    src: url('../Noto_Sans_JP/NotoSansJP-Bold.otf');
    src: url('../Noto_Sans_JP/NotoSansJP-Light.otf');
  }

  html {
    font-size: 62.5%;
    font-family: noto;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
