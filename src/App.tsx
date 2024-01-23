import { ThemeProvider } from "styled-components";
import { themeDefault } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { GlobalProvider } from "./context/GlobalContext";

export function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={themeDefault}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </GlobalProvider>
  );
}
