import "../style/index.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../../theme";
import ApplicationProvider from "@/providers/applicationProviders";

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
  return <ApplicationProvider>{children}</ApplicationProvider>;
}
