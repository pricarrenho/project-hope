import { ThemeProvider } from "styled-components";
import { themeDefault } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
