import App from "./App.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SnackbarClient from "./components/SnackbarClient.tsx";
const queryClient = new QueryClient();
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId="579846682694-9cd9336ecfsknj0hjijouaq0nphr5kbv.apps.googleusercontent.com">
              <App />
              <SnackbarClient />
            </GoogleOAuthProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Router>
      </Provider>
    </CssVarsProvider>
  </StrictMode>
);
