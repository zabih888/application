"use client";
import { MantineProvider } from "@mantine/core";
// import { Notifications } from "@mantine/notifications";
import "../../style/index.css";
import { theme } from "../../../theme";
const ThemeProvider = ({ children }: { children: any }) => {
  return (
    // <DirectionProvider>
    <MantineProvider theme={theme}>
      {children}
      {/* <Notifications /> */}
    </MantineProvider>
    // </DirectionProvider>
  );
};

export default ThemeProvider;
