import GlobalStyle from "~common/styles/global";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { theme } from "~common/styles/theme";
import { routes } from "~routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer position="top-right" />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
