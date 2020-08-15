// Dependencies
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  body {
    font-family: Helvetica, sans-serif, Arial;
    font-size: 14px;
  }
`;
