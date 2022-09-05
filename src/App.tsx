import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routing/ProtectedRoute";
import LoginPage from "./components/auth/LoginPage";
import HomePage from "./components/homepage/HomePage";
import BasicPage from "./components/shared/BasicPage";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { LinkProps } from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import FilteredResources from "./components/resource/FilteredResources";
import SpecificResource from "./components/resource/SpecificResource";
import SearchPage from "./components/search/SearchPage";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  palette: {
    mode: "dark",
  },

  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute redirectTo="/login">
              <Routes>
                <Route path="/" element={<BasicPage />}>
                  <Route index element={<HomePage />} />
                  <Route path="resources">
                    <Route path=":key/:id" element={<SpecificResource />} />
                    <Route path=":key" element={<FilteredResources />} />
                  </Route>
                  <Route path="/search" element={<SearchPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
