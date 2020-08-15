// Dependencies
import React from "react";
import ReactDOM from "react-dom";

// App
import App from "./App";

// Styles utilities
import { GlobalStyle } from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
