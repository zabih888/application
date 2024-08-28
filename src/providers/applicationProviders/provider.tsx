import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import React, { ReactNode } from "react";

import ThemeProvider from "./ThemeProvider";
import ReactQueryProvider from "./react-query-provider";
import AuthenticationProvider from "../authenticationProvider";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeProvider>
          <ReactQueryProvider>
            <AuthenticationProvider>{children}</AuthenticationProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Provider;
