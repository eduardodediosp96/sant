import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,600');

  body {
    font-family: Poppins, sans-serif;
    min-height:100vh;
    margin: 0;
    #root {
      min-height:100vh;
    }
  }
`;

export default GlobalStyles;
