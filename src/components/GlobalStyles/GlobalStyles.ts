import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #C5E4E7;
  height: 100vh;
  font-family: 'Space Mono', monospace;
  flex-wrap: wrap;
}

    `;
    export default GlobalStyles;