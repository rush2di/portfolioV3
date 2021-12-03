import * as chroma from "chroma-js";

import { deepFreeze } from "helpers/utils";

const theme = deepFreeze({
  fonts: {
    primary: `'BelyDisplayW00', Arial, serif`,
    secondary: `'Azo Sans', 'Segoe UI', 'Roboto', 'Ubuntu', 'Helvetica Neue', sans-serif`,
  },
  colors: {
    primary: `#fdfdfd`,
    primary100VD: chroma(`#fdfdfd`).darken(1),
    primary200VD: chroma(`#fdfdfd`).darken(1.5),
    primary100VL: chroma(`#fdfdfd`).brighten(1),
    primary200VL: chroma(`#fdfdfd`).brighten(1.5),
    secondary: `#373737`,
    secondaryVD100: chroma(`#373737`).darken(1),
    secondaryVD200: chroma(`#373737`).darken(1.5),
    secondaryVD300: chroma(`#373737`).darken(2),
    secondaryVD400: chroma(`#373737`).darken(2.5),
    secondaryVL100: chroma(`#373737`).brighten(1),
    secondaryVL200: chroma(`#373737`).brighten(1.5),
    secondaryVL300: chroma(`#373737`).brighten(2),
    secondaryVL400: chroma(`#373737`).brighten(2.5),
  },
  fontSizes: {
    h1: `2rem`,
    h2: `1.88rem`,
    h3: `1.75rem`,
    h4: `1.4rem`,
    h5: `1.3rem`,
    h6: `1.12rem`,
    lg: `880rem`,
    md: `1rem`,
    sm: `0.92rem`,
    xsm: `0.8rem`,
  },
  lineHeights: {
    lg: `1.7`,
    md: `1.65`,
    sm: `1.55`,
  },
  radiuses: {
    lg: `1.25rem`,
    md: `0.85rem`,
    sm: `0.6rem`,
  },
  breakpoints: {
    lg: `1200px`,
    md: `992px`,
    sm: `767px`,
    xsm: `660px`,
  },
});

export default theme;
