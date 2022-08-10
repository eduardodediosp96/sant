import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalStyles from "./common/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { client } from "./config/apollo";
import theme from "./common/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
