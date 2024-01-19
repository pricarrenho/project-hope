import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body,
    h1,
    h2,
    h3,
    h4,
    p {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }

    html,
    body {
      background: ${theme.colors.background};
      font-family: ${theme.font.family}, sans-serif;
    }

    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
    }
  `}
`;
