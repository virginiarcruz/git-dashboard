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

body, input, button {
  font-family: 'Ubuntu', serif;
  font-size: 16px;
}

body {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: ${blue};
  color: ${white};
  width: 100vw;
  height: 100vh;
  padding: 100px;
  text-align: center;
}

h1, h2, h3, h4, h5, h6, strong, button{
  font-weight: 500;
}

button {
  cursor: pointer;
}
`;
