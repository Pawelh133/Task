import { createGlobalStyle } from 'styled-components';

import { pxToRem } from './utils';

const GlobalStyleProvider = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    font-size: ${pxToRem(16)};
    box-sizing: border-box;
  }
`;

export default GlobalStyleProvider;
