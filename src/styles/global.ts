import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/exo-2/400.css';
import '@fontsource/exo-2/700.css';

const GlobalStyles = createGlobalStyle`
  ${reset};  

  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }

  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
  }

  html,
  body,
  #app {
    height: 100%;
    font-family: 'Montserrat';
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    -ms-overflow-style: none;
  }  
`;

export default GlobalStyles;
