import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import React, { ReactNode } from "react";

import ThemeProvider from "./ThemeProvider";
import ReactQueryProvider from "./react-query-provider";
import AuthenticationProvider from "../authenticationProvider";

const ApplicationProvider = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
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

export default ApplicationProvider;
