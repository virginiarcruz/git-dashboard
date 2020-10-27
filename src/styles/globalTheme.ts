import { createGlobalStyle } from 'styled-components/macro';

import { blue, white } from './colors';

export default createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html, #root {
  height: 100%;
}

.App {
  flex-grow: 1;
  width: 100%;
}

#root {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.sticky_sentinel {
  max-width: 0;
}

body {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  max-width: 100vw;
  background-color: ${blue};
  color: ${white};
  width: 100%;
  text-align: center;
}
`;
