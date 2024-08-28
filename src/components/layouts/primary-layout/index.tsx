import Header from "@/components/navigation/header";
import Navbar from "@/components/navigation/navbar";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      bg="bg.0"
      header={{ height: 70 }}
      navbar={{ width: 240, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      withBorder={false}
    >
      <Navbar />
      <Header opened={opened} toggle={toggle} />
      <AppShell.Main bg="bg.0">{children}</AppShell.Main>
    </AppShell>
  );
};

export default PrimaryLayout;
