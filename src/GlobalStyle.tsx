import { createGlobalStyle } from 'styled-components';
import notoLight from '../webfonts/NotoSansJP-Light.otf';
import notoMedium from '../webfonts/NotoSansJP-Medium.otf';
import TenaliRamakrishnaRegular from '../webfonts/TenaliRamakrishna-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  html {
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
    font-size: 62.5%;
    font-family: 'noto', sans-serif;
    font-weight: normal;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
