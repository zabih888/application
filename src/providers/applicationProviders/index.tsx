"use client";
import React, { ReactNode } from "react";
import Provider from "./provider";
import PrimaryLayout from "@/components/layouts/primary-layout";
import { usePathname } from "next/navigation";
import LoginLayout from "@/components/layouts/login-layout";

const ApplicationProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" || pathname === "/sign-in";
  return <Provider>{isLoginPage ? <>{children}</> : <PrimaryLayout>{children}</PrimaryLayout>}</Provider>;
};

export default ApplicationProvider;
